import { Component } from '@angular/core';
import { ResponsiveService } from '../../../shared/services/responsive.service';
import { SidebarService } from '../../../shared/services/sidebar.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent {
  isMobile$ = this.responsiveService.isMobile$;

  constructor(
    private responsiveService: ResponsiveService,
    private sidebarService: SidebarService
  ) {}

  toggleMenu() {
    this.sidebarService.toggle();
  }
}
