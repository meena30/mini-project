import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser:any;
  userDetails:any;

  constructor(private authService: AuthService) { 
    /*this.user = this.authService.currentUserValue;

      console.log(this.user);

      console.log(localStorage.getItem('currentUser'));*/
      
      this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.userDetails);
      console.log(this.userDetails.first_name);

  }

  ngOnInit(): void {
    //alert(this.userDetails.user_id);
    console.log(this.userDetails.user_id);
  }

}
