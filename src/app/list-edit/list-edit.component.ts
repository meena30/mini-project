import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {first} from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import {User} from '../model/user';




@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {

  editID: number;
  editForm: FormGroup;
  submitted = false;



  constructor(private formBuilder: FormBuilder,private apiService: DataService,private router: Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.editForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
    });


    this.editID = this.actRoute.snapshot.params['id'];
  	console.log(this.editID);

    this.apiService.editUserData(this.editID).subscribe( data => {
        console.log(data);
        console.log(data.result.FirstName);
        //this.editForm.setValue(data.result);
        this.editForm.controls['id'].setValue(data.result.ID);
        this.editForm.controls['firstName'].setValue(data.result.FirstName);
        this.editForm.controls['lastName'].setValue(data.result.LastName);
        this.editForm.controls['email'].setValue(data.result.Email);

      });



  }


   // convenience getter for easy access to form fields
   get f() { return this.editForm.controls; }

   onSubmit() {

    this.submitted = true;

      // stop here if form is invalid
      if (this.editForm.invalid) {
          return;
      }

     console.log(this.editForm.value);

    this.apiService.updateUserData(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          if(data.status === 200) {
            //alert('User updated successfully.');
            this.router.navigate(['reactform']);
          }else {
            //alert(data.message);
          }
        },
        error => {
          //alert(error);
        });

  }


}
