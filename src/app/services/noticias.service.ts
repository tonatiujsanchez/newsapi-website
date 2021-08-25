import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { NewsAPIResponse, Article } from '../interfaces/noticias.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=019897fb383b459b926ac81dbc8a31ee
  private url: string = 'https://newsapi.org/v2/top-headlines';
  private apiKey: string = '019897fb383b459b926ac81dbc8a31ee';
  
  paisActivo: string = 'mx';
  categoriaActiva:string = 'general';
  private numArticulos: number = 15;
  
  private articulos: Article[] = [];

  get allArticulos():Article[]{
    return this.articulos;
  }

  constructor(
    private http: HttpClient
  ) { }


  getNoticias(){

    const params = new HttpParams()
      .set('country', this.paisActivo)
      .set( 'category', this.categoriaActiva)
      .set( 'pageSize', this.numArticulos)
      .set( 'apiKey', this.apiKey );
      

    this.http.get<NewsAPIResponse>( this.url, { params: params } )
      .subscribe( ({articles})=>{
        this.articulos = articles;
        
        console.warn(this.categoriaActiva);
        console.log(this.articulos);
        
    });
  }
}

