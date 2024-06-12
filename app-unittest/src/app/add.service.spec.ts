import { TestBed } from '@angular/core/testing';

import { AddService } from './add.service';

describe('AddService', () => {
  let service: AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return the sum of two numbers",()=>{
    const result = service.add(2,1)
    expect(result).toBe(3);
  });

  it("should return the sum of negative numbers",()=>{
    const result = service.add(-2,-1)
    expect(result).toBe(-3);
  });


});
