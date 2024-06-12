import { TestBed } from '@angular/core/testing';

import { AddHttpService } from './add-http.service';
import { HttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AddHttpService', () => {
  let service: AddHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClientTesting(),
        AddHttpService,
        { provide: HttpClient, useValue: spy },
      ],
    });
    service = TestBed.inject(AddHttpService);

    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the sum of two numbers from the API', () => {
    const mockSum = 5;
    const a = 2;
    const b = 3;

    httpClientSpy.get.and.returnValue(of(mockSum));

    service.add(a, b).subscribe((sum:number) => {
      expect(sum).toEqual(mockSum);
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toBe(`${service['apiUrl']}?a=${a}&b=${b}`);
  });

});
