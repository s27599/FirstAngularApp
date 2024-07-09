import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
//implements OnChanges
// implements OnInit
//implements OnChanges, DoCheck
export class TodoComponent  {


  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  openModal: boolean = false;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck wywolany')
  //   // console.log(this.todo)
  // }

  // constructor() {
  //   console.log(this.todo)
  // }
  // ngOnInit(): void {
  //   console.log(this.todo)
  //
  // }

  changeTodoStatus() {
    this.changeStatus.emit(this.i);
    // this.todo.isComplete = !this.todo.isComplete;
  }

  toggleModal(): void {
    this.openModal = !this.openModal
  }

  deleteToDo() {
    this.delete.emit();
  }
}
