import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChatLayoutComponent } from './chat-layout.component';
import { DirectMessageComponent } from './containers/direct-message/direct-message.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { MessageToolbarComponent } from './components/message-toolbar/message-toolbar.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';

@NgModule({
  declarations: [
    ChatLayoutComponent,
    DirectMessageComponent,
    ChatHeaderComponent,
    MessagesComponent,
    MessageComponent,
    MessageToolbarComponent,
    UsersComponent,
    SidebarHeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChatLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: 'direct/1',
          },
          {
            path: 'direct/:id',
            component: DirectMessageComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class ChatModule {}
