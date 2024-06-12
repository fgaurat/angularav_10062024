export interface Todo {
  id?:string;
  userId?:number;
  title:string;
  completed:boolean;

}

export type Todos = Todo[];
