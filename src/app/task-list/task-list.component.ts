import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // tasksArray = [
  //   {id: '0', content: 'TODO 1', checked: false},
  //   {id: '1', content: 'TODO 2', checked: true},
  //   {id: '2', content: 'TODO 3', checked: true},
  //   {id: '3', content: 'TODO 4', checked: false},
  // ];
  @Input() tasksArray: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

}
