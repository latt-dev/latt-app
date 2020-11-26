import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map((user) => !!user), // <-- map to boolean
      tap((loggedIn) => {
        if (!loggedIn) {
          console.error(`Page access is denied for unauthenticated users. Please, sign in with your Google account!`);
          this.router.navigate(['/']);
        }
      })
    );
  }
}
