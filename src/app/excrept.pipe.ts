import {Pipe, PipeTransform} from '@angular/core';
import {split} from 'ts-node';

@Pipe({
  name: 'ExcreptPipe'
})
export class ExcreptPipe implements PipeTransform {
  transform(value: string, times: number = 6, ending: string = '..'): string {
    if (value.length <= times) {
      return value.substring(0, times);
    } else {
      return value.substring(0, times - ending.length) + ending;
    }
  }
}
