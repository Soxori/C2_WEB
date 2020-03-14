import { Component } from '@angular/core';
import { UsersService } from 'users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-login';

    constructor(private usersService:UsersService) {
    
    usersService.getUser().subscribe((data) => {
    });
    }
    

}
