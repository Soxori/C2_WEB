import {Component, OnInit, ɵɵresolveBody} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {ReturnedData} from '../return-data';
import Key from '../Key';
import { ServiceCheck } from '../services/services.check';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  private header = new HttpHeaders();
  private tempUsersArray = [];
  public url = "http://85.160.64.233:3000/users";
  public page = 0;


  constructor(private router: Router, private userService: UserService, private httpClient: HttpClient) {
  }

  next(){
    if(this.page < 0){

    } else {
      this.page +=1;
      this.httpClient.get<ReturnedData>(this.url + '?page=' + this.page, {headers: this.header})
      .subscribe(
        (data) => {
          this.tempUsersArray = data.users;
          console.log(this.tempUsersArray);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  previous(){
    if(this.page == 0){
      
    } else {
      this.page -=1;
      this.httpClient.get<ReturnedData>(this.url + '?page=' + this.page, {headers: this.header})
      .subscribe(
        (data) => {
          this.tempUsersArray = data.users;
          console.log(this.tempUsersArray);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  ngOnInit() {
    this.header = this.header.set('User-Token', Key.access);
    console.log(ServiceCheck.token.access_token);
    this.httpClient.get<ReturnedData>(this.url, {headers: this.header}).subscribe(
      (data) => {
          this.httpClient.get<ReturnedData>(this.url + '?page=' + this.page, {headers: this.header})
          .subscribe(
            (data) => {
              this.tempUsersArray = data.users;
              console.log(this.tempUsersArray);
            },
            error => {
              console.log(error);
            }
          );
      },
      error => {
        if (error.status === 401) {
          this.router.navigate(["/login"]);
        }
        console.log(error);
      }
    );
  }

}
