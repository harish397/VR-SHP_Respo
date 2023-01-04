import { Component, OnInit } from '@angular/core';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-produuct',
  templateUrl: './produuct.component.html',
  styleUrls: ['./produuct.component.css']
})
export class ProduuctComponent implements OnInit {
data:any;
images=['../assets/Images/LP2.jpg' ]
  constructor(private ser:RegService) { }

  ngOnInit(): void {
    this.ser.getImg().subscribe((x:any)=>{this.data=x})

  }

}
