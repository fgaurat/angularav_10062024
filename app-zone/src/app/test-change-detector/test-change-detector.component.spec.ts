import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChangeDetectorComponent } from './test-change-detector.component';

describe('TestChangeDetectorComponent', () => {
  let component: TestChangeDetectorComponent;
  let fixture: ComponentFixture<TestChangeDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestChangeDetectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestChangeDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
