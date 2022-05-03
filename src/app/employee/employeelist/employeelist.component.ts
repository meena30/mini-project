import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import {User} from '../../model/user';
import {Router} from "@angular/router";

//import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit, AfterViewInit  {

  public list: any; //declare variable as array
  error: string;
  resMsg:any;

  public displayedColumns = ['ID', 'FirstName', 'LastName', 'Email', 'Edit', 'Delete'];
  public dataSource = new MatTableDataSource<User>();
  
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder,private apiService: DataService,private router: Router) { }

  ngOnInit(): void {

    this.getEmployee();
  }

getEmployee() {
    this.apiService.getuser().subscribe((res:User[]) => {
      //console.log(res);
      this.list = res;
      this.dataSource.data = res;
      console.log(this.dataSource.data);
    });
}

ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
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
