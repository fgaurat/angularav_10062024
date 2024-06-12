import { Component, Signal, WritableSignal, computed, signal ,effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncComponent } from './inc/inc.component';
import { ShowComponent } from './show/show.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IncComponent,ShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-counter-signal';

  count2:WritableSignal<number> = signal(0);
  count:WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);



  constructor(){
    effect(() => {
      console.log(`The current count is: ${this.count2()}`);
    });
  }

  inc(){
    this.count2.update(cpt => cpt+1);
  }

}
