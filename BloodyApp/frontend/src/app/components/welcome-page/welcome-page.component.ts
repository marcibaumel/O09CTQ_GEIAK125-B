import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  slides = [
    {'image': 'https://cdn.trendhunterstatic.com/thumbs/469/free-dozen-donuts.jpeg?auto=webp'},
    {'image': 'https://www.proimprint.com/blog/wp-content/uploads/2016/01/Blood-drop.jpg'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
