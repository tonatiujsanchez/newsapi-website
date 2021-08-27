import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces/noticias.interface';

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  @Input() articulos:Article[] = [];
  constructor() { }


}
