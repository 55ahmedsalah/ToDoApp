import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task-service/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements AfterViewInit, OnInit {
  @ViewChild('taskInput', null) myDiv: ElementRef;

  taskEntered = '';

  constructor(
    private router: Router,
    public taskService: TaskService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  addNewTask() {
    if (this.taskEntered === '') {
      return;
    }
    this.taskService.addTask(this.taskEntered);
    this.myDiv.nativeElement.value = '';
    this.myDiv.nativeElement.focus();
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.addNewTask();
    }
  }
}
