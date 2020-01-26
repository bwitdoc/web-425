import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .txt-bold {
      font-weight: bold;
    }
    #csp {
      background-color: #90EE90;
      border: 1px solid #006400;
    }
  `]
})
export class AppComponent {
    searchInput = new FormControl('');
    convertedStockPrice: string;

    constructor() {
      this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(stock => this.getStockQuoteFromServer(stock));
    }

    getStockQuoteFromServer(stock: string) {
      this.convertedStockPrice = 'This price of ${stock} is ${(100 * Math.random()).toFixed(4)}';
    }
}
