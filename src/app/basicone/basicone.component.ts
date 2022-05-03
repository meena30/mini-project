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


// search data 
  title = 'custom-search-filter-example';
  searchedKeyword: string;

  filterResultDataSet = [
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      country: 'Pourtgal',
      club:'Juventus'
    },
    {
      firstName: 'Leo',
      lastName: 'Messi',
      country: 'Argentina',
      club:'Barcelona'
    },
    {
      firstName: 'Neymar',
      lastName: 'Junior',
      country: 'BRAZIL',
      club:'PSG'
    },
    {
      firstName: 'Sergio',
      lastName: 'Ramos',
      country: 'SPAIN',
      club:'Real Madrid'
    },
    {
      firstName: 'Karim',
      lastName: 'Benzema',
      country: 'France',
      club:'Real Madrid'
    },
    {
      firstName: 'Sergio',
      lastName: 'Buiscut',
      country: 'SPAIN',
      club:'Barcelona'
    },
    {
      firstName: 'Gerard',
      lastName: 'Pique',
      country: 'SPAIN',
      club:'Barcelona'
    }
  ]

// search data

testData = {userID : 1, firstName:'Meena', lastName:'Bala', nickName:'Meena_Chandru', DOB:'03/30/1995'}

  dataset = [{
    userID : 1, firstName:'Meena', lastName:'Bala', nickName:'Meena_Chandru', DOB:'03/30/1995'},
  {userID : 2, firstName:'Siddhu', lastName:'Bala', nickName:'Siddhu_Chandru', DOB:'11/10/2021'}
  ]
  
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
