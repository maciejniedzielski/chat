import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@chat/data-access';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  @Input() users: User[];
}
