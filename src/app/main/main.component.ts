import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // If user is not logged in, take him/her to sign in page
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/']);
    }
  }

  signout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  onTaskAdded(task) {
    this.tasks.push(task);
  }
}
