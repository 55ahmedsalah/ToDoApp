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
  isLoading = false;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.isLoading = true;
    this.taskService.getTasksArray();
    this.taskSubscription = this.taskService.getTasksUpdated()
    .subscribe((tasks: Task[]) => {
      this.isLoading = false;
      this.tasksArray = tasks;
    }, (error: { json: () => void; }) => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }
}
