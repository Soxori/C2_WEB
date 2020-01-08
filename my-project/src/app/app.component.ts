import { Component, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';


  public cislo1:number;
  public cislo2:number;
  public vysledek;

  plus() {
    this.vysledek = this.cislo1 + this.cislo2;
  }

  minus() {
    this.vysledek = this.cislo1 - this.cislo2;
  }

  krat() {
    this.vysledek = this.cislo1 * this.cislo2;
  }

  deleno() {
    this.vysledek = this.cislo1 / this.cislo2;
    if(this.cislo1 == 0 || this.cislo2 == 0) {
      this.vysledek = "Nulou se neda delit";
    }
  }
  
}
