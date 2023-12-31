import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string
   {
    if (param == "Prime") {
      if (value % 2 === 0 || value % 3 === 0)

        return "It is not Prime Number";

      let i = 5;
      while (i * i <= value) {
        if (value % i === 0 || value % (i + 2) === 0)
          return "It is not Prime Number";
        i += 6;
      }
      return "It is a prime Number";
    }

    if (param == "Perfect") {
      let temp = 0;
      for (var i = 1; i <= value / 2; i++) {
        if (value % i === 0) {
          temp += i;
        }
      }
      if (temp === value && temp !== 0) {
        return "It is a perfect number";
      }
      else {
        return "It is not a perfect number";
      }

    }

    if (param == "Even") {
      if (value % 2 == 0) {
        return "It is a even number";
      }
      else {
        return "It is not even number";
      }
    }

    if (param == "Odd") {
      if (value % 2 == 0) {
        return "It is a not odd number";
      }
      else {
        return "It is odd number";
      }

    }
    return param;
  }
}
