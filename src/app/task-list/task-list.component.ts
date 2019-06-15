import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../models/task';
import { TaskService } from '../services/task-service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  @Input() tasksArray: Task[] = [];
  private taskSubscription: Subscription;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.tasksArray = this.taskService.getTasksArray();
    this.taskSubscription = this.taskService.getTasksUpdated()
    .subscribe((tasks: Task[]) => {
      this.tasksArray = tasks;
    });
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }
}
