import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl='http://localhost:5144/'
  constructor(private httpClient:HttpClient ) { }

  getForcast():Observable<any>
  {
   return this.httpClient.get(this.baseUrl+'GetWeatherForecast');
  }

  postForcast():Observable<any>
  {
   return this.httpClient.post(this.baseUrl+'PostUserData','Nagnath Kendre');
  }

     //read employees data ( Read operation)
     getAllEmployees(){
      return this.httpClient.get(this.baseUrl);
   }
   
   //get employee by id (read operation)
   getEmployeeById(id: any){
      return this.httpClient.get(this.baseUrl + "/" + id);
   }
   
   //create or add new employee (Post operation)
   createEmployee(obj: any){
      return this.httpClient.post(this.baseUrl + "/", obj);
   }
   
   //update employee data (Put operation)
   updateEmployee(id: any, obj: any) {
      return this.httpClient.put(this.baseUrl + '/' + id , obj);
   }
   
   //delete employee (Delete operation)
   deleteEmployee(id: any){
      return this.httpClient.delete(this.baseUrl + "/" + id);
   }
}
