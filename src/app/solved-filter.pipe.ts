import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solved-filter'
})
export class SolvedFilterPipe implements PipeTransform {

  transform(markers: any, slice: string): any {
    if (slice === 'solved') {
      return markers.filter( m => Object.keys(m.solucao).length > 0 );
    } else if (slice === 'unsolved') {
      return markers.filter( m => Object.keys(m.solucao).length === 0 );
    }
    return markers;
  }

}
