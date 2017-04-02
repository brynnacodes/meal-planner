import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthiness"
})

export class HealthinessPipe implements PipeTransform {

  transform(input: Meal[], desiredHealthiness) {
    var output: Meal[] = [];

    if (desiredHealthiness === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < "500") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredHealthiness === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= "500") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
