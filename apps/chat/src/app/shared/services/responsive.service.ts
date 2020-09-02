import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile$ = this.breakpointObserver.observe(['(max-width: 768px)']).pipe(
    map((breakpointState: BreakpointState) => breakpointState.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
