import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { MessageQueueService } from '../../services/message-queue.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {

  private messageQueueService: MessageQueueService =
    inject(MessageQueueService);

  todoFormModel: Todo = {
    title: '',
    completed: false,
  };

  submitTodo() {
    this.messageQueueService.dispatch({ type: 'NEW_TODO',payload:this.todoFormModel })
  }
}
