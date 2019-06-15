import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task-service/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskEntered = '';

  constructor(
    private router: Router,
    public taskService: TaskService
  ) { }

  ngOnInit() {

  }

  addNewTask() {
    if (this.taskEntered === '') {
      return;
    }

    console.log(this.taskEntered);

    // Id not -1
    this.taskService.addTask(-1, this.taskEntered, false);
  }
}
