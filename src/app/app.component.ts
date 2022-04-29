import { Component } from '@angular/core';

export interface Task {
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'my-to-do' | undefined
  tasks: Task[] = [
    {text: 'Learn Angular'},
    {text: 'Learn CSS'},
    {text: 'Learn JavaScript'}
  ]

  addArrElem(event: any) {
    this.tasks.push({text: event.target.value})
    event.target.value = ""
    console.log(this.tasks)
  }
}
