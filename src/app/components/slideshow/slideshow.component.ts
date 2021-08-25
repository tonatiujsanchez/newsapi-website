import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Article } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnChanges {
  @Input() articulos:Article[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log(this.articulos);
  }
}
