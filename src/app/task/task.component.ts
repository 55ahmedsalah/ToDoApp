import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task-service/task.service';

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

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  doneWithTask(taskId) {
    // Send Request
    // this.taskService.taskChecked(id);
    return;
  }

  taskNotDone(taskId) {
    // Send Request
    // this.taskService.taskUnchecked(id);
    return;
  }
}
