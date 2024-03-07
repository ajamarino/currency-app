import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Currency } from '../../interfaces/currency';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CurrencyService } from '../../sevices/currency.service';

@Component({
  selector: 'app-currency-update',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CurrencyUpdateComponent],
  templateUrl: './currency-update.component.html',
  styleUrl: './currency-update.component.sass'
})


export class CurrencyUpdateComponent {
currencies: Currency[] = [];


selectedValueLeft!: number;
selectedValueRight!: number;
convertedValue: number = 0;
currencyValue!: number;
selectedCurrency!: Currency;

constructor(private currencyService: CurrencyService ){}

ngOnInit(): void {
  this.getCurrencyValues();
  console.log(this.selectedValueLeft)
}

convertCurrency():void{
  if(this.selectedValueLeft && this.selectedValueRight){

    let exchangeRate = this.returnCurrencyObj(this.selectedValueLeft).value / this.returnCurrencyObj(this.selectedValueRight).value;
    this.convertedValue = this.currencyValue * exchangeRate;
  }
}

returnCurrencyObj(id: number): Currency {
  this.currencies.forEach(currency => {
    if(currency.id == id){
      this.selectedCurrency = currency;
    }
  });
  return this.selectedCurrency;
}

getCurrencyValues(): void {
   this.currencyService.getCurrencyValues().subscribe(currencies => this.currencies = currencies);
    console.log(this.currencies )
}
}
