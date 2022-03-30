import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  slides = [
    {'image': 'https://www.redcrossblood.org/content/dam/redcrossblood/promo-pages/refuel_promo_image_v2.jpg.transform/1288/q82/feature/image.jpeg'},
    {'image': 'https://www.redcross.org/content/dam/redcross/local/news-articles/san-diego/LowBloodSupply.png.transform/1288/q70/feature/image.png'},
    {'image': 'https://cdn.trendhunterstatic.com/thumbs/469/free-dozen-donuts.jpeg?auto=webp'},
    {'image': 'https://www.proimprint.com/blog/wp-content/uploads/2016/01/Blood-drop.jpg'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
