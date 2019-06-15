import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from 'src/app/models/task';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksArray: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();
  constructor() { }

  getTasksArray() {
    return [...this.tasksArray];
  }

  getTasksUpdated() {
    return this.tasksUpdated.asObservable();
  }

  addTask(id, content, checked) {
    const task: Task = {
      id: id,
      content: content,
      checked: checked
    };
    this.tasksArray.push(task);
    this.tasksUpdated.next([...this.tasksArray]);
  }
}
