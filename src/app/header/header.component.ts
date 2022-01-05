import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';
import {Role} from '../model/role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser:any;

  constructor(private titleService: Title, private authService: AuthService) {

      this.authService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  get isLoggedIn() { return this.authService.isLoggedIn(); }

  get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }
  get isSuperadmin() {
        return this.currentUser && this.currentUser.role === Role.Superadmin;
    }

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

}
