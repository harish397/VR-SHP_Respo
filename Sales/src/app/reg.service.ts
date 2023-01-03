import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  isUser(isUser: any) {
    throw new Error('Method not implemented.');
  }

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
    return this.http.get(`https://localhost:44392/api/Project1/get/${ID}`,this.httpOption);
  }


  LogData(UserName:any,ID:any)
  {
    return this.http.get(`https://localhost:44392/api/Project1/login/${UserName}/${ID}`).subscribe((s:any) =>{
      this.isUser = s;
    });

  }
  AdminLD(UserName:any,password:any)
  {
    return this.http.get(`https://localhost:44349/api/Sales/getAUP/${UserName}/${password}`);
  }
}
