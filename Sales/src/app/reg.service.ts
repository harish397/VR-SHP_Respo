import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  httpOption={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
DataInfo!:any;

  constructor(private http:HttpClient) { }
getData(){
  return this.http.get('https://localhost:44349/api/Sales/get/');
}
getByID(ID:any)
  {
    return this.http.get(`https://localhost:44349/api/Sales/getbyId/${ID}`);
  }


  LogData(UserName:any,ID:any)
  {
    console.log(`https://localhost:44349/api/Sales/getUP/{UserName}/{Id}`)
    return this.http.get(`https://localhost:44349/api/Sales/getUP/${UserName}/${ID}`);

  }
}
