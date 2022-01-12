import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import {User} from '../../model/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public list: any; //declare variable as array
  error: string;
  resMsg:any;
  
  constructor(private formBuilder: FormBuilder,private apiService: DataService,private router: Router) { }

  ngOnInit(): void {

    this.getEmployee();
  }

getEmployee() {
    this.apiService.getuser().subscribe((res:User[]) => {
      //console.log(res);
      this.list = res;
      console.log(this.list);
    });
}


onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.apiService.deleteUser(+id).subscribe(
        res => {
          console.log(res);
          //console.log(res.message);
          this.resMsg = res;
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }






}
