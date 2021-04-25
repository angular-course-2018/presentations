import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes.component.html'
})
export class PipesComponent {
  numbers: { num: number }[] = [{ num: 1 }, { num: 2 }];
  now = new Date();

  myObj = {
    first: 1,
    second: 2,
  };

  isLoading = true;
  asyncCall = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved!!');
      this.isLoading = false;
    }, 3000);
  });

  addNumber() {
    this.numbers.push({ num: Math.floor(Math.random() * 10) });
  }

  removeNumber() {
    this.numbers.pop();
  }
}
