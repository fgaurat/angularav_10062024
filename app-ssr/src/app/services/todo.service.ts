import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo, Todos } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http:HttpClient = inject(HttpClient)

  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // constructor(private http:HttpClient) { }

  findAll():Observable<Todos>{
    const url = environment.url_todos
    return this.http.get<Todos>(url);
  }

  delete(todo:Todo):Observable<void>{
    const url = `${environment.url_todos}/${todo.id}`
    return this.http.delete<void>(url);
  }


  save(todo:Todo):Observable<Todo>{
    const url = environment.url_todos
    return this.http.post<Todo>(url,todo,this.httpOptions);

  }
}
