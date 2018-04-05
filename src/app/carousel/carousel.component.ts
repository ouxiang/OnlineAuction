import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imgUrls : Array<string>;
  imgUrl:string;
  constructor() { }

  ngOnInit() {
    this.imgUrls = ['http://placehold.it/800x300','http://placehold.it/800x300','http://placehold.it/800x300'];
    this.imgUrl = 'http://placehold.it/800x300';
  }

}
