import { createAction, props } from '@ngrx/store';
import { Todo, Todos } from '../../models/todo';

export const loadTodo = createAction('[TodoList Component] Load');
export const loadTodoOK = createAction('[TodoList Component] Load OK',props<{todos:Todos}>());

export const deleteTodo = createAction('[TodoList Component] Delete',props<{todo:Todo}>());
export const deleteTodoOK = createAction('[TodoList Component] Delete OK',props<{todo:Todo}>());

export const newTodo = createAction('[TodoList Component] New Todo',props<{todo:Todo}>());
export const newTodoOK = createAction('[TodoList Component] New Todo OK',props<{todo:Todo}>());
