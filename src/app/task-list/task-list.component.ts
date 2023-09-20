import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {


  title = 'todo-list Page View';

  tasks: Task[] = [];

  add(newTask: any) {
    this.tasks.push(new Task((this.tasks.length + 1), newTask.value));
    console.log(newTask.value, this.tasks.length);
    newTask.value = '';
  }

  remove(task: string) {
    const confirmation: boolean = confirm("Are you sure?");
    if (confirmation) {
      this.tasks = this.tasks.filter((_task) => _task.title != task);
    }
  }



}

class Task {
  public markAsDone: boolean = false;
  constructor(public id: number, public title: string) {
  }

  public toggleMarkAsDone() {
    this.markAsDone = !this.markAsDone;
  }
}