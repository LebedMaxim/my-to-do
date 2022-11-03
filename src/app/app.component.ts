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
    let activeTasks = this.tasks.filter(item => !item.done).length
    if (activeTasks === 1) return `${activeTasks} item`
    return `${activeTasks} items`
  }

  allSubtasksCounter() {
    let activeSubtasks = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (!this.tasks[i].done && this.tasks[i].subTasks) {
        for (let j = 0; j < this.tasks[i].subTasks.length; j++) {
          if (!this.tasks[i].subTasks[j].done) {
            activeSubtasks += 1;
          }
        }
      }
    }
    if (activeSubtasks === 1) return `${activeSubtasks} subtask`
    return `${activeSubtasks} subtasks`
  }

  form = new FormGroup({
    sort: new FormControl('All')
  })

  clearCompleted() {
    for (let i = 0; i < this.tasks.length; i++) {

      if (!this.tasks[i].done) {
        for (let j = 0; j < this.tasks[i].subTasks.length; j++) {
          if (this.tasks[i].subTasks[j].done) {
            this.tasks[i].subTasks.splice(j, 1)
            j = j - 1
          }
        }
      }

      if (this.tasks[i].done) {
        this.tasks.splice(i, 1)
        i = i - 1
      }
    }
    this.updateLocalStorageTasks()
  }

  ngOnInit() {
  }

  clearLocalStorage() {
    localStorage.clear()
    window.location.reload()
  }
}
