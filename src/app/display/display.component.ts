import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displays;
  constructor(service: DisplayService) {
    this.displays = service.getDisplay();
    //this.displays = service.logout();
  }

  ngOnInit() {
  }

}
