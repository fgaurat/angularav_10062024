import { Component } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-parent-comp',
  standalone: true,
  imports: [ChildCompComponent],
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent {
  cpt = {value:0};

  inc(){
    this.cpt.value++;
  }
}
