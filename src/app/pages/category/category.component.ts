import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../interfaces/categoria.interface';
import { DataService } from '../../services/data.service';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/noticias.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  get articulos(): Article[]{
    return this._noticias.allArticulos;
  }
  get articulosSlide(): Article[]{
    return this.articulos.slice(0,3);
  }

  catagorias: Categoria[] = [];

  constructor(
    private _data: DataService,
    public _noticias: NoticiasService, 
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.catagorias = this._data.allCategorias;
   }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe( ({ categoria }) =>{
        // Verificando si existe la ruta
        let ruta = this.catagorias.filter( cat => cat.code === categoria )
        if( !(ruta.length > 0) ){
          this.router.navigate(['/home']);
          return;
        }
        
        //Indicar catagoria y obtener noticias
        this._noticias.categoriaActiva = categoria;
        this._noticias.getNoticias();
        
      });
  }

}
