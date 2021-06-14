import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit{
  ngOnInit(): void {
    this.asyncCall.then(value => this.result = value)
  }
  numbers: { num: number }[] = [{ num: 1 }, { num: 2 }];
  now = new Date();
  result: string;

  myObj = {
    first: 1,
    second: 2,
  };

  isLoading = true;
  asyncCall = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved!!');
      this.isLoading = false;
    }, 3000);
  });

  foo() {

  }

  addNumber() {
    this.numbers = [
      ...this.numbers,
      { num: Math.floor(Math.random() * 10) }
    ];
  }

  removeNumber() {
    this.numbers.pop();
  }
}
