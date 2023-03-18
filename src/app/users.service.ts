import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(public http: HttpClient ) { }
  
 logInData(result:any){
  console.log(result);
  
 return this.http.post<string>('http://localhost:3000/login', result)

 }
  
 regInData(res2:any){
 console.log(res2);
 return this.http.post<string>('http://localhost:3000/register',res2)
 
 }
 isLoggedUser(){
  
 return !!localStorage.getItem('logged user');
 }

 getMyAuthToken(){
  return localStorage.getItem('logged user');
 }
}
