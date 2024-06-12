import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { TestChangeDetectorComponent } from './test-change-detector/test-change-detector.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestZoneComponent,TestChangeDetectorComponent,ParentCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-zone';
}
