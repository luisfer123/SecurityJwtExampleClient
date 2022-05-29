import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../_model/Role';
import { AuthService } from '../_security/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Role = Role;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  hasRole(roles: Array<Role>): boolean {
    return this.authService.hasRole(roles);
  }

  isAuthenticated() {
    return !(this.authService.principalValue == null);
  }

  logout() {
    this.authService.logout().subscribe({
      next: _ => {
        this.router.navigate(['/login']);
      }
    });
  }

}
