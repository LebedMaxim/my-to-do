import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

export interface Task {
  text: string
  done: boolean
  subTasks: Array<any>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: 'my-to-do' | undefined

  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ||
    '[{"text": "Make a demo", "done": "true", "subTasks": [{"text": "Make a start button", "done": "true"}, {"text": "Make a task list", "done": "true"}]}, ' +
    '{"text": "Learn Angular", "subTasks": [{"text": "Learn RxJS"}, {"text": "Learn lifecycle hooks"}]}]')

  updateLocalStorageTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  addArrElem(start: HTMLInputElement) {
    if (start.value == "") return
    this.tasks.push({text: start.value, done: false, subTasks: []})
    this.updateLocalStorageTasks()
    start.value = ""
  }

  deleteAim(newItem: number) {
    this.tasks.splice(newItem, 1);
    this.updateLocalStorageTasks()
  }

  allTasksCounter() {
    return this.tasks.filter(item => !item.done).length
  }

  form = new FormGroup({
    sort: new FormControl('All')
  })

  clearCompleted() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done) {
        this.tasks.splice(i, 1)
        i = i - 1
      }
    }
    this.updateLocalStorageTasks()
  }

  ngOnInit() {
    console.log(localStorage.getItem("tasks"))
    /*localStorage.clear()*/
  }

  subtasks = []
  clickedSubtask = false

  showSubs(arr: any) {
    this.subtasks = arr
    this.clickedSubtask = true
  }
}
