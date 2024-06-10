import { Component } from '@angular/core';
import { RideService } from '../services/ride.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {
  customers:any
  constructor(private service:RideService){
    this.service.isAuthenticated()
    // this.service.getCustomers().subscribe(data=>this.customers=data)
    this.ngOnInit()
  }

  ngOnInit(){
    this.service.getCustomers().subscribe(data=>this.customers=data)    
  }

  handleDelete(id:any){
    this.service.deletecustomer(id).subscribe(data=>{
      // console.log(data)
      this.ngOnInit()
    })
  }
  generatePdf(id:any){
    let customerdetail=this.customers.find((cust:any)=>cust.id==id) 
    let body=[]
    for(let  work of customerdetail.works){
      body.push([work.title,work.description,work.amount])
    }
    const doc = new jsPDF()
    autoTable(doc, {
      head: [['Title', 'Description', 'Amount']],
      body: body,
    })
    doc.text("invoice",20,20)
    doc.save('table.pdf')
  }
}
