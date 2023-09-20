import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTitleComponent } from './task-title.component';



@NgModule({
  declarations: [
    TaskTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskTitleComponent
  ]
})
export class TaskTitleModule {

}
