import {Component, Input, OnInit} from '@angular/core';
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

  ngOnInit(): void {
  }

  showSub() {
    console.log(this.subtask)
  }
}
