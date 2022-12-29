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

  LogData(Username:any,Id:any)
  {
    console.log(Username)
  return this.http.get(`https://localhost:44349/api/Sales/getUP/${Username}/${Id}`);

  }
}
