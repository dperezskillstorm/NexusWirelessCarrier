import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }
  

  getUsers(): Observable<User>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/api/v1/user',{headers});
  }

 

  getUserPlans(): Observable<User>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/api/v1/user_plans',{headers});
  }


  getUsersList(): Observable<User[]>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User[]>('http://localhost:8080/api/v1/users',{headers});
  }

  createUser(user: User): Observable<Object>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post(`${this.baseURL}`, user,{headers});
  }

  getUserById(id: number): Observable<User>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>(`${this.baseURL}/${id}`,{headers});
  }

  updateUser(id: number, user: User): Observable<Object>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.put(`${this.baseURL}/${id}`, user,{headers});
  }

  deleteUser(id: number): Observable<Object>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete(`${this.baseURL}/${id}`,{headers});
  }

  //DEVICES
  getDeviceList(): Observable<Device[]>{
    let username ="mike99";
    let password ="password";

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Device[]>('http://localhost:8080/api/v1/devices',{headers});
  }


}
