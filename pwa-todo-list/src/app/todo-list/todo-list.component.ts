import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo, Todos } from '../models/todo';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoService:TodoService = inject(TodoService)
  todos$: Observable<Todos> = EMPTY;

  ngOnInit(){
    this.todos$ = this.todoService.findAll();

  }

  onDelete(todo:Todo){
    this.todos$ = this.todoService.delete(todo).pipe(
      switchMap(() => this.todoService.findAll())
    );
  }

}
