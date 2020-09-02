import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  users = [
    {
      id: 1,
      username: 'Jane_Doe',
      name: 'Jane Doe',
    },
  ];
}
