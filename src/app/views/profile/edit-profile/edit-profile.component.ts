import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {KeycloakService} from 'keycloak-angular';

export interface Task {
  text: string
  done: boolean
  subTasks: Array<any>
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user = '';

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout('http://127.0.0.1:3002').then();
  }

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

  form = new UntypedFormGroup({
    sort: new UntypedFormControl('All')
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

  clearLocalStorage() {
    localStorage.clear()
    window.location.reload()
  }
}
