import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { User } from  '../model/user';
import {ApiResponse} from "../model/api.response";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  PHP_API_SERVER = "http://localhost/web_api/";
  public url = 'http://localhost/web_api/';

  constructor(private httpClient: HttpClient) { }

  getuser(): Observable<User[]>{
    //return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/read.php`);
    return this.httpClient.get<User[]>(this.url + 'fetch_user.php');
  }

  deleteUser(id:number){
    return this.httpClient.get(this.url+ 'delete_user.php?id=' + id);
  }

  /*editUserData(id:number){
    return this.httpClient.get(this.url+ 'edit_user.php?id=' + id);
  }*/

  editUserData(id: number): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.url+ 'edit_user.php?id=' + id);
  }

  /*updateUserData(data){
    return this.httpClient.post(this.url + 'update_user.php', data);
  }*/

  updateUserData(data: User): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.url + 'update_user.php', data);
  }


  createUser(data: User): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.url + 'create_user.php', data);
  }

}
