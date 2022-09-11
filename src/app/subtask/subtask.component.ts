import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subtask} from '../task/task.component';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['../task/task.component.css', './subtask.component.css']
})

export class SubtaskComponent implements OnInit {

  @Input() subtask: Subtask = {text: '', done: false}

  isDone() {
    if (this.readonly) {
      this.subtask.done = !this.subtask.done
    }
  }

  readonly = true

  changeText(event: any) {
    if (!this.subtask.done) {
      this.readonly = false
      event.focus()
    }
  }

  @Output() delItemEvent = new EventEmitter<any>();
  @Output() updateLocalStorageTasks = new EventEmitter<any>();

  deleteSubAim() {
    this.delItemEvent.emit(this.subtask);
  }

  ngOnInit(): void {
  }

  finishEditing() {
    this.readonly = true;
    this.updateLocalStorageTasks.emit();
  }

  showSub() {
    console.log(this.subtask)
  }
}
