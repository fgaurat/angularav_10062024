import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { increment,decrement,reset, incrementBy } from './counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ngrx-counter';

  count$: Observable<{value:number}>=EMPTY;

  constructor(private store: Store<{ count: {value:number} }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
  incrementBy() {
    this.store.dispatch(incrementBy({incValue:2}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
