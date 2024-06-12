import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject, input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildCompComponent {
  changeDetector:ChangeDetectorRef = inject(ChangeDetectorRef)

  @Input()
  cpt!:{value:number};

  changeDetection(){
    this.changeDetector.detectChanges();
  }
}
