import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { NewsAPIResponse, Article } from '../interfaces/noticias.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=019897fb383b459b926ac81dbc8a31ee
  private url: string = 'https://newsapi.org/v2/top-headlines';
  private apiKey: string = '019897fb383b459b926ac81dbc8a31ee';
  
  public paisActivo: string = 'mx';
  public categoriaActiva:string = 'general';
  private numArticulos: number = 15;
  
  private articulos: Article[] = [];

  get allArticulos():Article[]{
    return this.articulos;
  }

  public cargando: boolean = false;
  constructor(
    private http: HttpClient
  ) { }


  getNoticias(){
    this.cargando = true;
    const params = new HttpParams()
      .set('country', this.paisActivo)
      .set( 'category', this.categoriaActiva)
      .set( 'pageSize', this.numArticulos)
      .set( 'apiKey', this.apiKey );
      

    this.http.get<NewsAPIResponse>( this.url, { params: params } )
      .subscribe( ({articles})=>{
        this.articulos = articles;
        this.cargando = false;
    }, (err)=>{
      console.error(err);
      this.cargando = false;
    });
  }

  // https://newsapi.org/v2/top-headlines?country=ar&q=messi&apiKey=019897fb383b459b926ac81dbc8a31ee
  buscarNoticia( query:string ){
    const params = new HttpParams()
      .set('country', this.paisActivo)
      .set('q', query)
      .set( 'apiKey', this.apiKey );

    return this.http.get<NewsAPIResponse>( this.url, {params} );
  }
}

