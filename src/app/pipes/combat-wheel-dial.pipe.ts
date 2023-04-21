import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combatWheelDial'
})
export class CombatWheelDialPipe implements PipeTransform {

  transform(value: number ): string {
    if(!isInteger(value)){
      return `${Math.floor(value)}|${Math.ceil(value)}`
    }
    return `${value}`
  }

}

function isInteger(value:number){
  return value % 1 === 0;
}
