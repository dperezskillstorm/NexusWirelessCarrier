import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  user: User = new User
  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {
   this.user = new User();
      this.userService.getUsers().subscribe( data => {
        this.user = data;
      });
    }
  

}
