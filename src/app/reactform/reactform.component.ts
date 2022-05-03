import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

 bsValue = new Date();
   bsRangeValue: Date[];
   maxDate = new Date();
   minDate = new Date();
today: Date;

bsInlineValue = new Date();

currentDate = new Date();

  constructor(private formBuilder: FormBuilder,private apiService: DataService,private router: Router,private datePipe: DatePipe) { 

    this.today = new Date();
    
    console.log(this.today);
    let myDate = new Date(); 

    console.log(this.datePipe.transform(this.today, 'MM-dd-yyyy'));
/*console.log(this.datepipe.transform(myDate, 'yyyy-mm-dd'));
someDateVar = this.datepipe.transform(myDate, 'yyyy-mm-dd');*/

    /*this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.bsRangeValue = [this.bsValue, this.maxDate];*/
    


/*const year = this.dob.getYear() - 18;
const month = this.dob.getMonth();
const date = this.dob.getDate();
this.maxDob = new Date(year, month, date);

console.log(this.maxDob);*/





  }

  ngOnInit(): void {

    this.getEmployee();

    this.registerForm = new FormGroup({
    dateYMD: new FormControl(new Date())
    /*dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),*/
    
  });

        this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          date: ['', Validators.required],
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

      const dob = this.transformDate(this.registerForm.get('date').value);

      //this.value = this.transformDate(value);

      console.log(dob);

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    private transformDate(value: any) {
    return this.datePipe.transform(value, 'MM-dd-yyyy');
  }

    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }



}
