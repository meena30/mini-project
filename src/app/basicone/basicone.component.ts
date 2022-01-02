import { Component, OnInit } from '@angular/core';
//import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicone',
  templateUrl: './basicone.component.html',
  styleUrls: ['./basicone.component.css']
})
export class BasiconeComponent implements OnInit {

  constructor() { }

  username:string='Meena';
  userID:number=399;

  heroname:string='Balachandar';

  serverStatus:string='not created';

  itemImageUrl = '../assets/brandlogo.png';

  isUser = true;
  users = [{name:'Meena',age:26,gender:'Female'},
    {name:'Bala',age:31,gender:'Male'},
    {name:'Jothika',age:20,gender:'Female'},
    {name:'Geetha',age:24}
  ];

  agreed = 0;
  disagreed = 0;
  
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean){
    agreed ? this.agreed++ : this.disagreed++;
  }

  getemployeeID(){
    return this.userID;
  }

  ngOnInit(): void {
  }

}
