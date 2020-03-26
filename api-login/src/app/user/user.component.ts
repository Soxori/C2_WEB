import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.interface';
import {UserService} from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(i => this.users = i.users);
  }

}