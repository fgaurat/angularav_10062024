import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageQueueService } from '../../services/message-queue.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css',
})
export class TodoReactiveFormComponent {
  private messageQueueService: MessageQueueService =
    inject(MessageQueueService);
  private fb: FormBuilder = inject(FormBuilder);

  todoForm = this.fb.group({
    title: ['', Validators.required],
    completed: [false],
  });

  save() {
    this.messageQueueService.dispatch({ type: 'NEW_TODO',payload:this.todoForm.value})

  }
}
