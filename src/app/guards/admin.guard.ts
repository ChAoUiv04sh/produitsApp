import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (token && role === 'admin') {
      return true;
    }
    
    this.router.navigate(['/error'], {
      queryParams: { message: 'Accès refusé : role admin requis' }
    });
    return false;
  }
}
