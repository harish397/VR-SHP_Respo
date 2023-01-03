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
isUser:any;

  constructor(private http:HttpClient) { }
getData(){
  return this.http.get('https://localhost:44336/api/Group/get/{id}');
}
getByID(ID:any)
  {
    return this.http.get(`https://localhost:44336/api/Group/get/${ID}`);
  }


  LogData(UserName:any,ID:any)
  {
    console.log(`https://localhost:44336/api/Group/set/{Username}/{ID}`)
    return this.http.get(`https://localhost:44336/api/Group/set/${UserName}/${ID}`);

  }
  AdminLD(UserName:any,password:any)
  {
    return this.http.get(`https://localhost:44336/api/Sales/getAUP/${UserName}/${password}`)
  }
}
