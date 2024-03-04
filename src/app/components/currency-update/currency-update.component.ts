import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Currency } from '../../interfaces/currency';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-currency-update',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CurrencyUpdateComponent],
  templateUrl: './currency-update.component.html',
  styleUrl: './currency-update.component.sass'
})
export class CurrencyUpdateComponent {
  currencies : Currency[] = [{
    id: 1,
    description: 'USD',
    value: 1
  }, {
    id: 2,
    description: 'EUR',
    value: 0.9
  }, {
    id: 3,
    description: 'GBP',
    value: 0.8
  },
{
    id: 4,
    description: 'JPY',
    value: 110
},{
    id: 5,
    description: 'BRL',
    value: 4
}];

selectedValueLeft!: number;
selectedValueRight!: number;
selectedCurrency: String = 'Dolar';
selectedSulfix: String = 'USD';
convertedValue: number = 0; 
currencyValue!: number;

convertCurrency():void{
  if(this.selectedValueLeft && this.selectedValueRight){
    this.convertedValue = this.currencyValue * 5;
  }
  console.log("moment")
}
}
