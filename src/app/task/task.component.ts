import {Component, Input, OnInit} from "@angular/core";
import {Task} from '../app.component';
import {Output, EventEmitter} from '@angular/core';

export interface Subtask {
  text: string
  done: boolean
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task: Task = {text: '', done: false, subTasks: []}
  @Input() sorting: any

  isDone() {
    if (this.readonly) this.task.done = !this.task.done
    this.updateLocalStorageTasks.emit();
  }

  readonly = true
  subtask = this.task.subTasks

  changeText(event: any) {
    if (!this.task.done) {
      this.readonly = false
      event.focus()
    }
  }

  @Output() delItemEvent = new EventEmitter<any>();
  @Output() updateLocalStorageTasks = new EventEmitter<any>();
  @Output() showSubtasksEvent = new EventEmitter<any>();

  deleteAim() {
    this.delItemEvent.emit(this.task);
  }

  showSubtasks() {
    this.showSubtasksEvent.emit(this.task.subTasks);
  }

  ngOnInit() {
  }

  detectSorting(e: string): boolean {
    return e === 'All'
      || e === 'Active' && !this.task.done
      || e === 'Completed' && this.task.done
  }

  finishEditing() {
    this.readonly = true;
    this.updateLocalStorageTasks.emit();
  }
}