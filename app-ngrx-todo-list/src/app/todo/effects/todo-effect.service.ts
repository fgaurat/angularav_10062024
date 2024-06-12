import { Injectable } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { deleteTodo, deleteTodoOK, loadTodo, loadTodoOK, newTodo, newTodoOK } from '../actions/todo.actions';
import { exhaustMap, map } from 'rxjs';
import { Todo, Todos } from '../../models/todo';
import { Action } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class TodoEffectService {
  constructor(private todoService: TodoService, private actions$: Actions) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodo),
      exhaustMap(() => this.todoService.findAll()),
      map((todos: Todos) => loadTodoOK({ todos }))
    )
  );

  // deleteTodo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(deleteTodo),
  //     exhaustMap((action) => this.todoService.delete(action.todo)),
  //     map(() => loadTodo())
  //   )
  // );
  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      map((action) => {
        this.todoService.delete(action.todo).subscribe();
        return action
      }),
      map((action) => deleteTodoOK({todo:action.todo}))
    )
  );

  // newTodo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(newTodo),
  //     exhaustMap((action) => this.todoService.save(action.todo)),
  //     map(() => loadTodo())
  //   )
  // );

  newTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newTodo),
      exhaustMap((action) =>
        this.todoService.save(action.todo)
      ),
      map((todo:Todo) => newTodoOK({todo}))
    )
  );


}
