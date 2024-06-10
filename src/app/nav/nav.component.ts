import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isloggedIn:boolean=false

  constructor(private service:RideService,private router :Router){

    this.service.loggedInSubject.subscribe((data:any)=>this.isloggedIn=data)
  }

  signout(){
    localStorage.clear()
    this.router.navigateByUrl("")
  }

}
