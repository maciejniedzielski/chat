import { Component } from '@angular/core';
import { ResponsiveService } from '../../../shared/services/responsive.service';

@Component({
  selector: 'app-direct-message',
  templateUrl: './direct-message.component.html',
  styleUrls: ['./direct-message.component.scss'],
})
export class DirectMessageComponent {
  isMobile$ = this.responsiveService.isMobile$;
  user = {
    username: 'Jane_Doe',
    name: 'Jane Doe',
  };
  messages = [
    {
      message: 'Test message 1',
      sent: '2020-09-02T19:11:31.989Z',
    },
    {
      message: 'Test message 2',
      sent: '2020-09-02T19:11:31.989Z',
    },
    {
      message: 'Test message 3',
      sent: '2020-09-02T19:11:31.989Z',
    },
  ];

  constructor(private responsiveService: ResponsiveService) {}
}
