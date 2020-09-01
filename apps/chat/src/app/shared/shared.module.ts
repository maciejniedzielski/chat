import { NgModule } from '@angular/core';
import { NgLetDirective } from './directives/let.directive';
import { CommonModule } from '@angular/common';

const DIRECTIVES = [NgLetDirective];

@NgModule({
  declarations: [DIRECTIVES],
  imports: [CommonModule],
  exports: [CommonModule, DIRECTIVES],
})
export class SharedModule {}
