import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from 'src/app/models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksArray: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient) { }

  getTasksArray() {
    this.http.get<{message: string, tasks: Task[]}>('http://localhost:3000/api/tasks')
    .subscribe((tasksData) => {
      this.tasksArray = tasksData.tasks;
      this.tasksUpdated.next([...this.tasksArray]);
    });
  }

  getTasksUpdated() {
    return this.tasksUpdated.asObservable();
  }

  addTask(content) {
    const data = {
      id: null,
      // tslint:disable-next-line: object-literal-shorthand
      content: content,
      checked: false
    };
    this.http.post<{message: string}>('http://localhost:3000/api/tasks', data)
    .subscribe((response) => {
      this.tasksArray.push(data);
      this.tasksUpdated.next([...this.tasksArray]);
    });
  }

  taskChecked(id) {

  }

  taskUnchecked(id) {

  }
}
