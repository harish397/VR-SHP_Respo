import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
CD=new Date();
  constructor() { }
  product:any=null;
  count=1
  condition=true
  buttontext:any=null
  thenBlock:TemplateRef<any>|null=null;
  @ViewChild('some',{static:true}) firstBlock:TemplateRef<any>|null=null;
  @ViewChild('more',{static:true}) secondBlock:TemplateRef<any>|null=null;
  getData(id:number){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.product=data
    })
  }

  ngOnInit(): void {
    this.getData(this.count)
    this.thenBlock=this.firstBlock

  }
  previous(){
    this.count--
    this.getData(this.count)
  }
  next(){
    this.count++
    this.getData(this.count)
  }
  toggle(){
    this.thenBlock=(this.thenBlock==this.firstBlock)?this.secondBlock:this.firstBlock
   
  }

}
