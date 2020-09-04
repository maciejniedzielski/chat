import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { ResponsiveService } from '../shared/services/responsive.service';
import { SidebarService } from '../shared/services/sidebar.service';
import { User, UsersGQL, UsersQuery } from '@chat/data-access';
import { map, takeUntil, catchError } from 'rxjs/operators';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss'],
})
export class ChatLayoutComponent implements OnInit {
  @ViewChild('drawer') sidebar;
  isMobile$ = this.responsiveService.isMobile$;
  users$: Observable<User[]>;

  private subGuard$ = new Subject();

  constructor(
    private responsiveService: ResponsiveService,
    private sidebarService: SidebarService,
    private usersGQL: UsersGQL
  ) {}

  ngOnInit(): void {
    this.sidebarService.toggle$.pipe(takeUntil(this.subGuard$)).subscribe(() => {
      this.sidebar.toggle();
    });

    this.users$ = this.usersGQL.watch().valueChanges.pipe(
      map((res: ApolloQueryResult<UsersQuery>) => res.data.users),
      catchError(() => {
        return of([]);
      }),
      takeUntil(this.subGuard$)
    );
  }

  ngOnDestroy(): void {
    this.subGuard$.next();
    this.subGuard$.complete();
  }
}
