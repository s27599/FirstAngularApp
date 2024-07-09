import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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



  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo,index) => index !== i);
  }

  changeTodoStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
    }
  }
}
