import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monsterfilter'
})
export class MonsterfilterPipe implements PipeTransform {

  transform(value:any , args:string): any {
    if( args === undefined || args === '') return value ; 
    return value.filter((data:any) => 
      data.name.toLowerCase().includes(args.toLowerCase())
    )
  }

}
