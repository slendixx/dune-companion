import { Pipe, PipeTransform } from '@angular/core';
import Fraction from "fraction.js";

@Pipe({
  name: 'fraction'
})
export class FractionPipe implements PipeTransform {

  transform(value: number): string {
    return new Fraction(value).toFraction();
  }

}
