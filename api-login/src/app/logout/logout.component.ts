import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import Key from '../Key';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  private url=" http://134.122.72.178:3000/session/logout";
 

  constructor (private http: HttpClient, private router: Router){

  }

  clickedButtonLogout() {
    const headers = new HttpHeaders().set('User-Token', Key.access);
    this.http.delete(this.url, {headers}).subscribe(
      (data: any) => {
      Key.access = "";
        this.router.navigate(["/home"])
      }, (error) =>{
  
    }
    );
  }

  ngOnInit() {
  }

}
