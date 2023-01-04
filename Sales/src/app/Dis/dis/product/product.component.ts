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
condition=true
thenBlock:TemplateRef<any>|null=null;

  constructor(private ser:RegService) { }
 
@ViewChild('more',{static:true}) firstBlock:TemplateRef<any>|null=null;
@ViewChild('some',{static:true}) secondBlock:TemplateRef<any>|null=null;
  ngOnInit(){
    this.sk(this.imageID);



  }
  toggle()
  {
    this.thenBlock=(this.thenBlock==this.firstBlock)?this.secondBlock:this.firstBlock
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
