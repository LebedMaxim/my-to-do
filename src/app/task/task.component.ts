import {Component, Input, OnInit} from "@angular/core";
import {Task} from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { text: ''};

  /*text = 'Learn Angular'*/
  ngOnInit() {}


  private classList: any;

  done = false
  isDone(event: any) {
    this.done = !this.done
    event.target.classList.toggle('done')
  }

  deleteAim(){
    /*this.task.text = ''*/
    console.log(this.task)

    /*this.task.splice(0, 1)*/
  }

  changeText(){
    this.task.text = "Изменено!"
    /*this.task.addAttribute("readonly")*/
  }
}
