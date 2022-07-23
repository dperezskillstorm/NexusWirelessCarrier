import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl="http://localhost:8080/api/v1/users/login";

  constructor(private httpClient: HttpClient) { }

  loginUsers(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`,user);

  }
}
