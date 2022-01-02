import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private apiService: DataService,private router: Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

   // convenience getter for easy access to form fields
   get f() { return this.addForm.controls; }

   onSubmit() {
      this.submitted = true; 

      // stop here if form is invalid
      if (this.addForm.invalid) {
          return;
      }

      console.log(this.addForm.value);

      this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['reactform']);
      });

   }

}
