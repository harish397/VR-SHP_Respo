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
isUser:any;
  constructor(private http:HttpClient) { }
getData(){
  return this.http.get('https://localhost:44349/api/Sales/get/');
}
getByID(ID:any)
  {
<<<<<<< Updated upstream
    return this.http.get(`https://localhost:44349/api/Sales/getbyId/${ID}`,this.httpOption);
=======
    return this.http.get(`https://localhost:44392/api/Project1/get/${ID}`);
>>>>>>> Stashed changes
  }


  LogData(UserName:any,ID:any)
  {
<<<<<<< Updated upstream
    console.log(`https://localhost:44349/api/Sales/getUP/{UserName}/{Id}`)
    return this.http.get(`https://localhost:44349/api/Sales/getUP/${UserName}/${ID}`).subscribe((s:any)=>{
      this.isUser = s;})
=======
    console.log(`https://localhost:44392/api/Project1/login/{UserName}/{Id}`)
    return this.http.get(`https://localhost:44392/api/Project1/login/${UserName}/${ID}`);
>>>>>>> Stashed changes

  }
  AdminLD(UserName:any,password:any)
  {
    return this.http.get(`https://localhost:44349/api/Sales/getAUP/${UserName}/${password}`);
  }
}
