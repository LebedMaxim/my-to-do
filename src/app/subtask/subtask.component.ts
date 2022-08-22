import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['../task/task.component.css']
})

export class SubtaskComponent implements OnInit {

  @Input() subtask: any

  isDone() {
    if (this.readonly) this.subtask.done = !this.subtask.done
  }

  readonly = true

  ngOnInit(): void {
  }

  showSub() {
    console.log(this.subtask)
  }
}
