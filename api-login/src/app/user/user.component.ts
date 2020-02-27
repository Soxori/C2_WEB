import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Key from '../Key';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

private url=" http://85.160.64.233:3000/user";
private id = '';
private email = '';
private username = '';

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders().set('User-Token', Key.access);
    this.http.get(this.url, {headers}).subscribe(
      (data: any) => {
        this.id = data.id;
        this.email = data.email;
        this.username = data.username;

      }, (error) =>{
  
    }
    );
   }

  ngOnInit() {
  }

}
