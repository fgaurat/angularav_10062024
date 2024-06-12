import { createReducer, on } from '@ngrx/store';
import { Todos } from '../../models/todo';
import { deleteTodoOK, loadTodo, loadTodoOK, newTodoOK } from '../actions/todo.actions';


export const initialState:Todos = [

];

export const todoListReducer = createReducer(
  initialState,
  on(loadTodoOK,(state,action) => action.todos),
  on(deleteTodoOK,(state,action) => state.filter( todo=> todo.id !== action.todo.id)),
  on(newTodoOK,(state,action) => {

    const s = [...state]
    s.push(action.todo);
    return s;
  })
);
