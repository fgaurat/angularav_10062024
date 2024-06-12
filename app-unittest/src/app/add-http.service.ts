import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddHttpService {
  private apiUrl = 'http://localhost:3000/sum';

  http:HttpClient = inject(HttpClient)



  add(a:number,b:number):Observable<number>{
        return this.http.get<number>(`${this.apiUrl}?a=${a}&b=${b}`);
  }
}
