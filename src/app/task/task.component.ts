import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskName: string;
  @Input() checked = false;
  @Input() id = 0;
  taskID = 0;

  constructor() { }

  ngOnInit() {
  }

  checkValue(event: any) {
    console.log(event);
    return;
  }

  doneWithTask(taskId) {
    // Send Request
    console.log('Box Checked');
    return;
  }

  taskNotDone(taskId) {
    // Send Request
    console.log('Box Unchecked');
    return;
  }
}
