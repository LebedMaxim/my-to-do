import {AfterViewInit, ViewChild, ElementRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subtask} from '../task/task.component';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['../task/task.component.css', './subtask.component.css']
})

export class SubtaskComponent implements OnInit, AfterViewInit {

  @Input() subtask: Subtask = {text: '', done: false}
  @Input() idSubTask: boolean | undefined

  @ViewChild('subInput') subInputElement!: ElementRef<HTMLInputElement>;

  constructor() {
  }

  isDone() {
    if (this.readonly) {
      this.subtask.done = !this.subtask.done
      this.updateLocalStorageSubTasks.emit();
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
  @Output() updateLocalStorageSubTasks = new EventEmitter<any>();

  deleteSubAim() {
    this.delItemEvent.emit(this.subtask);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.idSubTask) {
      setTimeout(() => {
        this.readonly = false
        this.subInputElement.nativeElement.focus();
        this.subInputElement.nativeElement.select();
        this.idSubTask = false
        console.log(this.idSubTask)
        this.updateLocalStorageSubTasks.emit();
      })
    }
  }

  finishEditing() {
    this.readonly = true;
    this.idSubTask = false
    this.updateLocalStorageSubTasks.emit();
  }
}
