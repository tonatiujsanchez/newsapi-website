import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  results: Article[] = [];
  cargando: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    public _noticias: NoticiasService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe( ({query})=>{

        this.cargando = true;

        this._noticias.buscarNoticia( query )
          .subscribe( ({articles}) =>{
            this.results = articles;
            this.cargando = false;
          });
          
      });
  }


}
