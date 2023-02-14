# **MyToDo**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.
<br/>It's a very simple but also very useful application for writing down your own aims and tasks not to forget them.
The user can correct current tasks, check finished tasks, delete and sort all of them.

## Version's log

### 0.9.1
- Corrected CSS for 'Mozilla Firefox' and 'Opera' browsers

### 0.9.0
- Saving the changed task texts and their properties 'done' to JSON and a local storage

### 0.8.1
- Corrected the work of 'clear completed' button

### 0.8.0
- Adding and reading task's arrays from JSON to a local storage

### 0.7.0
- Added working of 'clear completed' button for deleting of finished tasks from the array

### 0.6.1
- Fixed the error of function's cooperation 'changeText' and 'isDone' on a mouse click

### 0.6.0
- Sorting of tasks on 'active', 'active', 'completed' buttons click

### 0.5.0
- Reworked activation of task sorting 'all', 'active', 'completed' buttons via form group. Made the transfer of information about their activation to 'TaskComponent'

### 0.4.2
- Returned the mark of the completed task with a checkmark

### 0.4.1
- Redesigned footer buttons via input, adjusted their styles. Redesigned the display of the 'done' task property via 'ngClass'

### 0.4.0
- The dynamic counter of the current tasks. Added the margins of 'all', 'active', 'completed' buttons

### 0.3.0
- Added the opportunity to delete the choosing task. Added the function to edit the task by a mouse click

### 0.2.0
- Added the making and adding of user tasks into an array. Corrected html file: tasks are showing via input, their width was increased, added an edit icon

### 0.1.0
- Added the showing of static task array, crossing out finished tasks by mouse click. Added a 'task.component' to show the added tasks


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:3001/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build & start docker-container

Build our docker image with the following: `docker build -t my-to-do .`

To run the image use the following: `docker run --name my-to-do --publish 3002:3002 my-to-do`

See your app running at http://localhost:3002 !

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
