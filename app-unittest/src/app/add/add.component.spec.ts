import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the sum of two numbers',()=>{
    //act
    const inputElements = fixture.debugElement.queryAll(By.css('input'));
    const buttonElement = fixture.debugElement.query(By.css('button'));
    const resultElement = fixture.debugElement.query(By.css('p'));

    //arrange
    inputElements[0].nativeElement.value = '2'
    inputElements[0].nativeElement.dispatchEvent(new Event('input'))

    inputElements[1].nativeElement.value = '1'
    inputElements[1].nativeElement.dispatchEvent(new Event('input'))

    buttonElement.nativeElement.click();
    fixture.detectChanges();

    //assert
    expect(resultElement.nativeElement.textContent).toContain("3");




  });


});
