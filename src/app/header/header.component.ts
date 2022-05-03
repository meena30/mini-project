//import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  userDisplayName:any;

   @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private titleService: Title, private authService: AuthService) {

      this.authService.currentUser.subscribe(x => this.currentUser = x);

      //this.user = this.authService.currentUserValue;

     // console.log(this.user);

      //console.log(localStorage.getItem('currentUser'));
  //this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
  //console.log(this.userDetails.first_name);

   }

  ngOnInit(): void {

    this.userDisplayName = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.userDisplayName);
  }

  /*get loggeduser() {
    //this.userDisplayName = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(this.userDisplayName.last_name);
    return this.authService.isLoggedInName();
    console.log(this.authService.isLoggedInName());
  }*/

  get isLoggedIn() { 
    //console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn(); 
  }

  get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }
  get isSuperadmin() {
        return this.currentUser && this.currentUser.role === Role.Superadmin;
    }

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
