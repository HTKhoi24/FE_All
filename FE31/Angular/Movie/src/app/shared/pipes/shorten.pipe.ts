import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limit: number): any {
    if( typeof value === "string" && value.length > limit){
      return value.substring(0,limit) + "...";
    }
    return value;
  }

}
