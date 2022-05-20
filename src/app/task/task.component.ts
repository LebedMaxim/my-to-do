import {Component, Input, OnInit} from "@angular/core";
import {Task} from '../app.component';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task = {text: '', done: false}
  @Input() sorting: any

  isDone() {
    this.task.done = !this.task.done
  }

  readonly = true

  changeText() {
    this.readonly = !this.readonly
  }

  @Output() delItemEvent = new EventEmitter<any>();

  deleteAim() {
    this.delItemEvent.emit(this.task);
  }

  ngOnInit() {
  }

  detectSorting(e: string): boolean {
    return e === 'All'
      || e === 'Active' && !this.task.done
      || e === 'Completed' && this.task.done
  }
}
