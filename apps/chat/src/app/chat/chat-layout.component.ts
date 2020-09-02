import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponsiveService } from '../shared/services/responsive.service';
import { SidebarService } from '../shared/services/sidebar.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss'],
})
export class ChatLayoutComponent implements OnInit {
  @ViewChild('drawer') sidebar;
  isMobile$ = this.responsiveService.isMobile$;

  private subGuard$ = new Subject();

  constructor(
    private responsiveService: ResponsiveService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.sidebarService.toggle$.subscribe(() => {
      this.sidebar.toggle();
    });
  }

  ngOnDestroy(): void {
    this.subGuard$.next();
    this.subGuard$.complete();
  }
}
