import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {

  @Input() articulos:Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
