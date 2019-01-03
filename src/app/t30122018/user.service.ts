import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  
  getUsers() {
    return this.http.get(environment.api_url + '/users');
  }

  addUser(data: any) {
    return this.http.post(environment.api_url + '/users', data);
  }

}
