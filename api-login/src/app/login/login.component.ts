import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Key from '../Key';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

private url ="http://134.122.72.178:3000/session/login";
private email = "";
private password = "";


  constructor (private http: HttpClient, private router: Router){

  }

  clickedButton() {
    this.http.post(this.url, {email: this.email, password: this.password }).subscribe(
      (data: any) => {
        Key.access = data.access_token;
        this.router.navigate(["/home"])
      }, (error) =>{
  
    }
    );
  }

  ngOnInit() {
  }

}
