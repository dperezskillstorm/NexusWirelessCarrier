import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login-user.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private loginuserservice: LoginUserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUsers(this.user).subscribe(data=>{

      alert("Login Sucessful")
    },error=>alert("Sorry Wrong Password or Username"));
  }

}
