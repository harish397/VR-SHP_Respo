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
  constructor(private http:HttpClient) { }

  getData(Id:any)
  {
  this.http.get('https://localhost:44349/api/Sales/getbyId/' +Id,this.httpOption).subscribe();
  }
}
