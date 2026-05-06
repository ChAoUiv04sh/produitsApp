import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  role: string = '';
  isAdmin: boolean = false;

  constructor(private authService: AuthService) {
    this.username = localStorage.getItem('username') || '';
    this.role = localStorage.getItem('role') || '';
    this.isAdmin = this.role === 'admin';
  }

  logout() {
    this.authService.logout();
  }
}
