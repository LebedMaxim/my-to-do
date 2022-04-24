import {Component, Input, OnInit} from "@angular/core";
import {Task} from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { text: ''};

  text = 'Learn Angular'
  done = false
  ngOnInit() {}

  private classList: any;
  isDone(event: any) {
    this.done = !this.done
    this.text = 'Gh'
    event.target.classList.toggle('done')
  }
}
