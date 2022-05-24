import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

export interface Task {
  text: string
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: 'my-to-do' | undefined

  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[{"text": "Добавьте цель!"}]')

  addArrElem(event: any) {
    this.tasks.push({text: event.target.value, done: false})
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    event.target.value = ""
  }

  deleteAim(newItem: number) {
    this.tasks.splice(newItem, 1);
  }

  allTasksCounter() {
    return this.tasks.filter(item => !item.done).length
  }

  form = new FormGroup({
    sort: new FormControl('All')
  })

  clearCompleted() {
    this.tasks.map((item, index) => {
      if (item.done) {
        this.tasks.splice(index, 1)
      }
    })
  }

  ngOnInit() {
    console.log(localStorage)
    /*localStorage.clear()*/
  }
}
