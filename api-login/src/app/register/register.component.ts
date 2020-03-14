import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
private url = "http://134.122.72.178:3000/session/register";
private username= "";
private email = "";
private password = "";
private passwordConfirmation = "";

  constructor (private http: HttpClient, private router: Router){

  }


  clickedButton() {
    if(this.password === this.passwordConfirmation) {
    this.http.post(this.url, {email: this.email, password: this.password, username: this.username, passwordConfirmation: this.passwordConfirmation }).subscribe(
      (data: any) => {
        this.router.navigate(["/home"])
        }, (error) =>{

        }
      );
    }
  }

  

  ngOnInit() {
  }

}
