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
import { MessageQueueService } from '../../services/message-queue.service';

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
  private todoService: TodoService = inject(TodoService);
  private messageQueueService: MessageQueueService =
    inject(MessageQueueService);

  todos$: Observable<Todos> = EMPTY;
  displayedColumns: Array<string> = [
    'id',
    'userId',
    'title',
    'completed',
    'chkCompleted',
    'action',
  ];
  ngOnInit(): void {
    // this.todos$ = this.todoService.findAll();
    // this.messageQueueService.bus$.subscribe(() => (this.todos$ = this.todoService.findAll()));

    const newTodo$=this.messageQueueService.bus$.pipe(
      filter(action => action.type == "NEW_TODO"),
      switchMap((action ) => this.todoService.save(action.payload))
    )

    const loadTodo$=this.messageQueueService.bus$.pipe(
      filter(action => action.type == "LOAD_TODO")
    )

    const deleteTodo$=this.messageQueueService.bus$.pipe(
      filter(action => action.type == "DELETE_TODO"),
      switchMap((action ) => this.todoService.delete(action.payload))
    )

    this.todos$ = merge(newTodo$,loadTodo$,deleteTodo$).pipe(
      switchMap(() => this.todoService.findAll())
    )
 //

  }

  ngAfterViewInit(){
    this.messageQueueService.dispatch({ type: 'LOAD_TODO'})
  }

  onDelete(todo: Todo) {
    this.messageQueueService.dispatch({ type: 'DELETE_TODO',payload:todo })

  }
}
