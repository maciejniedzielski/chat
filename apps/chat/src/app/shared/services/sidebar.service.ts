import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggle$ = new Subject();

  toggle() {
    this.toggle$.next();
  }
}
