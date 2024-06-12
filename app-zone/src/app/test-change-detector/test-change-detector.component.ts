import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-test-change-detector',
  standalone: true,
  imports: [],
  templateUrl: './test-change-detector.component.html',
  styleUrl: './test-change-detector.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestChangeDetectorComponent {

  ref:ChangeDetectorRef = inject(ChangeDetectorRef)

  cpt=0

  clickTimer1s(){

    interval(1000).pipe(take(10)).subscribe(() => this.cpt++);

  }

  clickTimer5s(){
    this.ref.detach();

    interval(1000).pipe(take(10)).subscribe(() => {
      this.cpt++;
      if(this.cpt%5 == 0){
        this.ref.detectChanges();
      }
    });

  }

}
