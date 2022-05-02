import {Component, Input, OnInit} from "@angular/core";
import {Task} from '../app.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task = { text: ''}
  /*@Input() index: number | undefined*/

  private classList: any

  done = false
  isDone(event: any) {
    this.done = !this.done
    event.target.classList.toggle('done')
  }

  changeText(){
    this.task.text = "Изменено!"
    /*this.task.toggleAttribute("readonly")*/
  }

  @Output() delItemEvent = new EventEmitter<any>();
  deleteAim() {
    this.delItemEvent.emit(this.task);
  }

  ngOnInit() {}
}
