import {Component} from '@angular/core';

export interface Task {
  text: string
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'my-to-do' | undefined
  tasks: Task[] = [
    {text: 'Learn Angular', done: false},
    {text: 'Learn CSS', done: false},
    {text: 'Learn JavaScript', done: false}
  ]

  addArrElem(event: any) {
    this.tasks.push({text: event.target.value, done: false})
    event.target.value = ""
    console.log(this.tasks)
  }

  deleteAim(newItem: number) {
    this.tasks.splice(newItem, 1);
  }

  allTasksCounter() {
    return this.tasks.filter(item => !item.done).length
  }
}
