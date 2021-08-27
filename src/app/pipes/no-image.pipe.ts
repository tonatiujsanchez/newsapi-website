import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: string | null): string {
    if(value){
      return value;
    }else{
      return '../../../assets/img/sin-foto.jpg';
    }
  }

}
