import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  paises: Pais[] = [
    {
      code: 'mx',
      label: 'México'
    },
    {
      code: 'us',
      label: ' Estados Unidos'
    },
    {
      code: 'ar',
      label: 'Argentina'
    },
    {
      code: 'co',
      label: 'Colombia'
    }
  ];
  
  categorias:Categoria[] = [
    {
      code: 'home',
      label: 'Home'
    },
    {
      code: 'entertainment',
      label: 'Entretenimiento'
    },
    {
      code: 'business',
      label: 'Negocios'
    },
    {
      code: 'science',
      label: 'Ciencia'
    },
    {
      code: 'technology',
      label: 'Tecnología'
    },
    {
      code: 'sports',
      label: 'Deportes'
    },
    {
      code: 'health',
      label: 'Mundo'
    }
  ];

  get allPaises(): Pais[]{
    return this.paises;
  }
  get allCategorias(): Categoria[]{
    return this.categorias;
  }
  constructor() { }
}
