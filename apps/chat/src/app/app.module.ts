import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
