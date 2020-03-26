import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './models/user.interface';
import {UsersList} from './models/user.list';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: "http://85.160.64.233:3000/";
  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  public getUsers(): Observable<UsersList> {
    const headers = new HttpHeaders()
      .set('User-Token', this.authenticationService.getToken());

    return this.httpClient.get<UsersList>(this.url + '/users', {headers});
  }
}