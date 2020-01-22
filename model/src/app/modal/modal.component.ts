import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  private hidden = true;
  
clickedButton2() {
  this.hidden = false;
}

  constructor() { }

  ngOnInit() {
  }

}
