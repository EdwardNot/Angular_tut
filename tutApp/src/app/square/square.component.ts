import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <!-- <p>
      square works! {{ rando }}
    </p> -->
    <button> {{value}} </button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important;}'
  ]
})
export class SquareComponent {

  @Input() value!: 'X' | 'O';

  // rando: number;

  // constructor() {
  //   this.rando = 0.0;
  //   setInterval(() => this.rando = Math.random(), 500);
  // }

}
