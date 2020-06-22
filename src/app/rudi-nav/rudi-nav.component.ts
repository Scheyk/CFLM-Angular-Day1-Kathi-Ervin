import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rudi-nav',
  templateUrl: './rudi-nav.component.html',
  styleUrls: ['./rudi-nav.component.css']
})
export class RudiNavComponent implements OnInit {
	projectName : string;
  constructor() {
  	this.projectName = "assets/img/flocke.png";
   }

  ngOnInit(): void {
  }

}
