import { Component, OnInit,TemplateRef,ViewChild,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
CD=new Date();
item:any;
condition=true;


thenBlock:TemplateRef<any>|null=null;

  constructor(private ser:RegService,@Inject(MAT_DIALOG_DATA) public data:any,private dia:MatDialog,private route:Router) { 
   
  }
 
@ViewChild('more',{static:true}) firstBlock:TemplateRef<any>|null=null;
@ViewChild('some',{static:true}) secondBlock:TemplateRef<any>|null=null;
  ngOnInit(){
    this.sk(this.data.imageID);



  }
 

  toggle()
  {
   
    this.thenBlock=(this.thenBlock==this.firstBlock)?this.secondBlock:this.firstBlock;
    
  }
  sk(imageID:any)
  {
    var shiva=this.ser.getImgbyId(this.data.imageID).subscribe((x)=>{this.item=x; })
    console.log(shiva);
    return shiva;
  }
  previous(){
   

    this.data.imageID--
    this.sk(this.data.imageID);
  
  }
  next(){
    this.data.imageID++
    this.sk(this.data.imageID);
   
  }
  Authorize()
  {
    this.route.navigate(['/Distributor/purchase']);
    this.dia.closeAll();
  }
  

}
