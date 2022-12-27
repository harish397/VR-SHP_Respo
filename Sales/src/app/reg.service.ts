import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http:HttpClient) { }
  getData(Id:any)
  {
  this.http.get('https://localhost:44349/api/Sales/getbyId/' +Id);
  }
}
