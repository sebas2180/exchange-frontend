
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  public ruta :string  = `http://134.122.13.83:2000/`;
  public clearLocalStorage(){
    localStorage.removeItem('userInfo');
    this.getLocal();
  }
  public getLocal(){
    return localStorage.getItem('userInfo');
  }

  public isAuthenticatede() : Boolean {
    let userData = localStorage.getItem('userInfo');
    if(localStorage.getItem('userInfo') != 'undefined'){
  
    if(userData && JSON.parse(userData)){
      return true;
    }
    }
    
    return false;
  }
  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }


  constructor(private http: HttpClient) { }
}
