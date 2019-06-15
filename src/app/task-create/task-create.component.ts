import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskEntered = '';
  @Output() taskCreatedEvent = new EventEmitter<Task>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // If user is not logged in, take him/her to sign in page
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/']);
    }
  }

  addNewTask() {
    if (this.taskEntered === '') {
      return;
    }

    console.log(this.taskEntered);

    const task: Task = {
      id: -1,
      content: this.taskEntered,
      checked: false
    };

    this.taskCreatedEvent.emit(task);
  }
}
