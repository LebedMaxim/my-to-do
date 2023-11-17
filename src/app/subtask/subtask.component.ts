import {AfterViewInit, ViewChild, ElementRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subtask} from '../task/task.component';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['../task/task.component.scss', './subtask.component.scss']
})

export class SubtaskComponent implements OnInit, AfterViewInit {

  @Input() subtask: Subtask = {text: '', done: false}
  @Input() sorting: any
  @Input() isEditedSubTask: boolean | undefined
  @Input() isDoneTask: boolean | undefined
  @Input() isShownSubtasks: boolean | undefined

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
    if (this.isEditedSubTask) {
      setTimeout(() => {
        this.readonly = false
        this.subInputElement.nativeElement.focus();
        this.subInputElement.nativeElement.select();
        this.isEditedSubTask = false
        this.updateLocalStorageSubTasks.emit();
      })
    }
  }

  finishEditing() {
    this.readonly = true;
    this.isEditedSubTask = false;
    this.updateLocalStorageSubTasks.emit();
  }

  detectSortingSubtasks(e: string): undefined | boolean {
    if (this.isShownSubtasks) {
      return e === 'All'
        || e === 'Active' && !this.isDoneTask && !this.subtask.done
        || e === 'Completed' && this.isDoneTask && this.subtask.done
    }
    return false
  }
}
