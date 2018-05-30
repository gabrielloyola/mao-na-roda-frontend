import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solved-filter'
})
export class SolvedFilterPipe implements PipeTransform {

  transform(markers: any, slice: string): any {
    if (slice === 'solved') {
      return markers.filter( m => m.solucao );
    } else if (slice === 'unsolved') {
      return markers.filter( m => !m.solucao );
    }
    return markers;
  }

}
