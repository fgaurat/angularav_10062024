import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountSignalService {
  private counter = signal(0);

  readonly count = this.counter.asReadonly();

  inc(){
    this.counter.update(cpt => cpt+1);
  }
}
