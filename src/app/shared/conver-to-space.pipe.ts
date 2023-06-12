import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converToSpace'
})
export class ConverToSpacePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string{
    return '';
  }

}
