import { Component, inject } from '@angular/core';
import { CountSignalService } from '../count-signal.service';

@Component({
  selector: 'app-inc',
  standalone: true,
  imports: [],
  templateUrl: './inc.component.html',
  styleUrl: './inc.component.css'
})
export class IncComponent {
  count:CountSignalService = inject(CountSignalService);


  inc(){
    this.count.inc();
    // this.count.count.set(12);
  }

}
