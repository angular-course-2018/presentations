import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(time: { minutes: number; seconds: number }, ...args: any[]) {
    const noSecondsString = args[0];
    return `${this.round(time.minutes)} : ${noSecondsString ? '' : this.round(time.seconds)}`;
  }

  private round(int: number) {
    return int.toString().padStart(2, '0');
  }
}
