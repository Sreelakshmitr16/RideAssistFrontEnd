import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RideService } from '../services/ride.service';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {


  //localhost:4200/customer/{id}

  customer:any

  id:any

  constructor( private router:ActivatedRoute,private service:RideService){

    this.service.isAuthenticated()
    this.id=this.router.snapshot.params["id"]

    this.service.retrieveCustomer(this.id).subscribe(data=>{
      // console.log(data)

      this.customer=data
      
    })
  }

}
