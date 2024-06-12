import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { Child02CompComponent } from './child02-comp/child02-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildCompComponent,Child02CompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-defer';

  show = signal(false);


  toggle(){
    this.show.update(value => !value);
  }
}
