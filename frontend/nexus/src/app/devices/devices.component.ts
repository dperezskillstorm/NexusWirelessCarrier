import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];

 
  device: Device = new Device
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getDevices();

  }
  private getDevices(){
    this.userService.getDeviceList().subscribe(data => {
      this.devices = data;
      console.log(data)
    });
  }

  

}
