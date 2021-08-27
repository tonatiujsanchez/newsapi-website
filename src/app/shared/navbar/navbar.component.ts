import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

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
  
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(
    private _data: DataService,
    private _noticias: NoticiasService,
    private router: Router
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

  buscar(){
    const query = this.txtBuscar.nativeElement.value.toLowerCase();
    if( query.trim().length <= 0 ){
      return
    }else{
      this.router.navigate(['busqueda', query]);
      this.txtBuscar.nativeElement.value = '';
    }
  }


}
