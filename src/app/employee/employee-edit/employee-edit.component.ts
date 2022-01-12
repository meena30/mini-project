import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import {User} from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  id: number;
  user: any;
  editForm: FormGroup;
   uploadError: string;
  imagePath: string;
  profile:any;

  constructor(private formBuilder: FormBuilder,private apiService: DataService,private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    
    this.id = this.actRoute.snapshot.params['id'];

    this.apiService.editUserData(this.id).subscribe(data => {

      console.log(data.result);
      //this.user = data.result;

      this.editForm.patchValue({
            id: data.result.ID,
            firstName: data.result.FirstName,
            lastName: data.result.LastName,
            email: data.result.Email,
            is_featured: data.result.is_featured
          });

      this.imagePath = data.result.Image;
      console.log(this.imagePath);

      /*this.editForm.controls['id'].setValue(data.result.ID);
        this.editForm.controls['firstName'].setValue(data.result.FirstName);
        this.editForm.controls['lastName'].setValue(data.result.LastName);
        this.editForm.controls['email'].setValue(data.result.Email);
        this.editForm.controls['is_featured'].setValue('1');*/
        

    });

    
    

    console.log(this.id);

    /*this.apiService.editUserData(this.editID).subscribe( data => {
        console.log(data);
        console.log(data.result.FirstName);
        //this.editForm.setValue(data.result);
        this.editForm.controls['id'].setValue(data.result.ID);
        this.editForm.controls['firstName'].setValue(data.result.FirstName);
        this.editForm.controls['lastName'].setValue(data.result.LastName);
        this.editForm.controls['email'].setValue(data.result.Email);

      });*/
this.editForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          is_featured: ['0'],
          image: [''],
          password: ['', [Validators.required, Validators.minLength(6)]]
    });

}

onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.editForm.get('image').setValue(file);
    }
  }


  onSubmit(){

    console.log(this.editForm.value);

    const id = this.editForm.get('id').value;

    const formData = new FormData();
    
    formData.append('id', id);
    formData.append('firstName', this.editForm.get('firstName').value);
    formData.append('lastName', this.editForm.get('lastName').value);
    formData.append('email', this.editForm.get('email').value);
    formData.append('is_featured', this.editForm.get('is_featured').value);

    formData.append('image', this.editForm.get('image').value);

    console.log(formData);

    this.apiService.updateUser(formData).subscribe(data => {

      console.log(data);
      //console.log(data.url);
       this.router.navigate(['/employee']);

    });

    

  }

}
