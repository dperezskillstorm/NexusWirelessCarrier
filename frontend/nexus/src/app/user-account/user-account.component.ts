import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: User = new User
  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {
   this.user = new User();
      this.userService.getUsers().subscribe( data => {
        this.user = data;
      });
    }
  
}
