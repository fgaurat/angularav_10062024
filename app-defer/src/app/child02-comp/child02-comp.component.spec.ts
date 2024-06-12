import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child02CompComponent } from './child02-comp.component';

describe('Child02CompComponent', () => {
  let component: Child02CompComponent;
  let fixture: ComponentFixture<Child02CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child02CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child02CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
