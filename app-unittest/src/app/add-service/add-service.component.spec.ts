import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceComponent } from './add-service.component';
import { AddService } from '../add.service';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AddServiceComponent', () => {
  let component: AddServiceComponent;
  let fixture: ComponentFixture<AddServiceComponent>;
  let addServiceSpy:jasmine.SpyObj<AddService>;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('AddService',['add'])

    await TestBed.configureTestingModule({
      imports: [AddServiceComponent,FormsModule],
      providers:[{provide:AddService,useValue:spy}]
    })
    .compileComponents();

    addServiceSpy = TestBed.inject(AddService) as jasmine.SpyObj<AddService>;

    fixture = TestBed.createComponent(AddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the sum of two numbers using AddService',()=>{
    const mockSum = 3;
    addServiceSpy.add.and.returnValue(mockSum);
    component.val1 = 2;
    component.val2 = 1;
    component.sum();
    fixture.detectChanges();
    expect(component.result).toBe(mockSum);
    expect(addServiceSpy.add).toHaveBeenCalledWith(2,1);
  });

  it('should calculate the sum of two numbers using AddService from template',()=>{
    //act
    const mockSum = 3;
    addServiceSpy.add.and.returnValue(mockSum);
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
    expect(addServiceSpy.add).toHaveBeenCalledWith(2,1);


  });


});
