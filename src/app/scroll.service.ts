import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  scrollElement(elementId: string) {
    this.scrollSubject.next(elementId);
  }

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }
}
