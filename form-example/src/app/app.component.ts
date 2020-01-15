import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'form-example';

  private username: String;
  private password: String;
  private login: String;
  private prihlaseni = false;


  clickedButton() {
    if(this.username === 'asd' && this.password === '123') {
      this.prihlaseni = true;
    }
    if(this.username != 'asd') {
      this.login = "Wrong Username";
    }
    if(this.password != '123') {
      this.login = "Wrong Password";
    }
    if(this.username != 'asd' && this.password != '123') {
      this.login = "Wrong Username and Password";
    }
  }
  
}
