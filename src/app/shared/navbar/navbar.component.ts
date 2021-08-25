import { Component, OnInit} from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interface';
import { DataService } from '../../services/data.service';

import { Pais } from '../../interfaces/pais.interface';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  categorias:Categoria[] = [];
  paises: Pais[] = [];

  inputVisible: boolean = false;
  
  constructor(
    private _data: DataService,
    private _noticias: NoticiasService
  ) { 
    this.categorias = this._data.allCategorias;
    this.paises = this._data.allPaises;
  }

  ngOnInit(): void {
  }
  seleccionarPais( pais:any ){
    this._noticias.paisActivo = pais.target.value;
    this._noticias.getNoticias();
  }

}
