import { Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, Observable, filter, merge, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { deleteTodo, loadTodo } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todos> = EMPTY;
  displayedColumns: Array<string> = [
    'id',
    'userId',
    'title',
    'completed',
    'chkCompleted',
    'action',
  ];

  constructor(private store: Store<{ todoList: Todos }>) {
    this.todos$ = store.select('todoList');
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodo())

    }

    onDelete(todo: Todo) {

      this.store.dispatch(deleteTodo({todo}))
  }
}
