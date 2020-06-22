import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
public heroHeading: string;
public  heroText: string;
public heroBtnText : string; 
public heroBtnUrl:   string ;

  constructor() { 
    this.heroHeading = "We are your ultimate Winter experience Provider!";
    this.heroText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, in!";
    this.heroBtnText = "View more";
    this.heroBtnUrl = "#"
  }

  ngOnInit(): void {
  }

}
