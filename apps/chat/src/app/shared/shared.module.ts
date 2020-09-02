import { NgModule } from '@angular/core';
import { NgLetDirective } from './directives/let.directive';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

const DIRECTIVES = [NgLetDirective];

const MODULES = [CommonModule, MaterialModule];

@NgModule({
  declarations: [DIRECTIVES],
  imports: [MODULES],
  exports: [MODULES, DIRECTIVES],
})
export class SharedModule {}
