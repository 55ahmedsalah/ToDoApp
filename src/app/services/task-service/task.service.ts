import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from 'src/app/models/task';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksArray: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient) { }

  getTasksArray() {
    this.http
      .get<{ message: string, tasks: any }>(
        'http://localhost:3000/api/tasks'
      )
      .pipe(map((tasksData) => {
        return tasksData.tasks.map(task => {
          return {
            content: task.content,
            id: task._id
          };
        });
      }))
      .subscribe((tasksData) => {
        this.tasksArray = tasksData;
        this.tasksUpdated.next([...this.tasksArray]);
      }, (error: { json: () => void; }) => {
        console.log(error);
      });
  }

  getTasksUpdated() {
    return this.tasksUpdated.asObservable();
  }

  addTask(content) {
    const data = {
      id: null,
      // tslint:disable-next-line: object-literal-shorthand
      content: content
    };
    this.http.post<{ message: string, taskId: string }>('http://localhost:3000/api/tasks', data)
      .subscribe((response) => {
        data.id = response.taskId;
        this.tasksArray.push(data);
        this.tasksUpdated.next([...this.tasksArray]);
      }, (error: { json: () => void; }) => {
        console.log(error);
      });
  }

  deleteTask(taskId: string) {
    this.http.delete<{ message: string }>('http://localhost:3000/api/tasks/' + taskId)
      .subscribe(() => {
        const updatedTasks = this.tasksArray.filter(task => task.id !== taskId);
        this.tasksArray = updatedTasks;
        this.tasksUpdated.next([...this.tasksArray]);
      });
  }
}
