import {Component/*, ViewChild*/} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
/*import {TaskComponent} from "./task/task.component";*/

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
    {text: 'Learn Angular', done: true},
    {text: 'Learn CSS', done: false},
    {text: 'Learn JavaScript', done: false}
  ]

  addArrElem(event: any) {
    this.tasks.push({text: event.target.value, done: false})
    event.target.value = ""
    /*console.log(this.tasks)*/
  }

  deleteAim(newItem: number) {
    this.tasks.splice(newItem, 1);
  }

  allTasksCounter() {
/*    console.log(this.form.value.sort);*/
    return this.tasks.filter(item => !item.done).length
  }

  form = new FormGroup({
    sort: new FormControl('All')
  })

/*  @ViewChild(TaskComponent, {static: false})
  private sortingComponent: TaskComponent | undefined;
  showSorting(e: any) {
    this.sortingComponent?.showSorting(e.target.value);
    /!*this.sorting = e.target.value*!/
    console.log(e.target.value);
  }*/

/*  showSorting(event: any) {
    this.sorting = event.target.value
/!*    console.log(this.sorting);
    console.log(this.form.value.sort);*!/
  }*/
}
