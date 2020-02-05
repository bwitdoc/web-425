import { Component, Output, EventEmitter } from '@angular/core';
import { IPriceQuote } from './iprice-quote'
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
    Inside PriceQuoteComponent
    {{ priceQuote?.stockSymbol }}
    {{ priceQuote?.lastPrice | currency: 'USD' }}
    </strong>
  `,
  styles: [`
    :host { background-color: pink; }
  `]
})
export class PriceQuoteComponent {

  @Output() lastPrice = new EventEmitter<IPriceQuote>();

  priceQuote: IPriceQuote;

  constructor() {
    interval(2000).subscribe(data => {
      this.priceQuote = {
        stockSymbol: 'Brittany',
        lastPrice: 100 * Math.random()
      };

      this.lastPrice.emit(this.priceQuote);
    });
   }

  }