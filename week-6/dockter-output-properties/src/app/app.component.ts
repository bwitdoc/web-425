import { Component } from '@angular/core';
import { IPriceQuote } from './price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  priceQuote: IPriceQuote;

  priceQuoteHandler(event: IPriceQuote) {
    this.priceQuote = event;
  }
}
