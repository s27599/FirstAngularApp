import {Component} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [];
  errorMessage: string = '';
  // testSwitchCase = 'tak';

  addTodo(todo:string): void {
    if(todo.length<=3){
      this.errorMessage = 'zadanie powinno mieć co najmniej 4 znaki';
      return;
    }
    this.todos.push({name:todo, isComplete: false});
    console.log("Aktualna lista todo: ", this.todos);
  }

  changeTodoStatus(todo:Todo) {
    todo.isComplete = !todo.isComplete
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
