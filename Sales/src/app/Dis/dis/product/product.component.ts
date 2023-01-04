import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
CD=new Date();
item:any;
imageID=1;

  constructor(private ser:RegService) { }
 

  ngOnInit(){
    this.sk(this.imageID);



  }
  sk(imageID:any)
  {
    var shiva=this.ser.getImgbyId(this.imageID).subscribe((x)=>{this.item=x; })
    console.log(shiva);
    return shiva;
  }
  previous(){
   

    this.imageID--
    this.sk(this.imageID);
  
  }
  next(){
    this.imageID++
    this.sk(this.imageID);
   
  }
  

}
