import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { RouterModule } from '@angular/router';
import { TaskTitleModule } from './task-title/task-title.module';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TaskTitleModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule { }
