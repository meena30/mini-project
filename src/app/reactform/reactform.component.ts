import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import {User} from '../model/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  msg: string = null;
  resMsg:any = [];
  public list: any; //declare variable as array
  //public res:any;
  //flashMessage:any;

  constructor(private formBuilder: FormBuilder,private apiService: DataService,private router: Router) { }

  ngOnInit(): void {

    this.getEmployee();

        this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          //confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      });
  }

  getEmployee() {
    this.apiService.getuser().subscribe((res:User[]) => {
      //console.log(res);
      this.list = res;
      console.log(this.list);
    });

    /*this.hrmsService.getuser().subscribe((data:User[]) =>{
      console.log(data);
    })*/
  }

  

  deleteRow(id:number){
    //alert(id);
    if(window.confirm('Are sure you want to delete this item ?')){
    this.apiService.deleteUser(id).subscribe( (res) => {
          console.log(res);
          this.resMsg = res;
          //console.log(this.resMsg);
          this.getEmployee();
          //this.msg = res.message;
          //console.log(this.msg)

        /*if(res['message']) {
          this.flashMessage.show('Registration successful', { cssClass: 'alert-success', timeout: 3200 });
        }
        else {
          this.flashMessage.show('Registration failed', { cssClass: 'alert-danger', timeout: 3200 });
        }*/

          
          
        });
      }

      

    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }



}
