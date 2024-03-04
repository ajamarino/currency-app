import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Currency } from '../../interfaces/currency';
import { CurrencyUpdateComponent } from '../currency-update/currency-update.component';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CurrencyUpdateComponent],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.sass'
})
export class CardComponentComponent {
  

}
