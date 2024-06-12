import { Component, Signal, inject } from '@angular/core';
import { CountSignalService } from '../count-signal.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  count:Signal<number> = inject(CountSignalService).count;



}
