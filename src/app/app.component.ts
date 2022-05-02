import { Component } from '@angular/core';

export interface Task {
  /*index: number*/
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
    this.tasks.push({ /*index: event.target.index,*/ text: event.target.value})
    event.target.value = ""
    console.log(this.tasks)
  }

  deleteAim(newItem: number) {
    this.tasks.splice(newItem, 1);/*{text: newItem}*/
  }
}
