import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Key from '../Key';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

private url ="http://85.160.64.233:3000/session/login";
private email = "";
private password = "";

myStorage = window.localStorage;
dataSource: any;
  ServiceCheck: any;

  constructor (private http: HttpClient, private router: Router, private userService: UserService){

  }

  clickedButton() {
    console.log(Key.access);
    this.http.post(this.url, {email: this.email, password: this.password }).subscribe(
      (data: any) => {
        Key.access = data.access_token;
        localStorage.setItem("access-token", data.access_token);
        this.router.navigate(["/user"]);
      }, (error) =>{
  
    }
    );
  }

  ngOnInit() {
    if (localStorage.getItem("access-token")) {
      console.log(localStorage.getItem("access-token"));
      Key.access = (localStorage.getItem("access-token"))

      this.router.navigate(["/user"])

    } else {
      this.router.navigate(["/login"])
    }
  }

}