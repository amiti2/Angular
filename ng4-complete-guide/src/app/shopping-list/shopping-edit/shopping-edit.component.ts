import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter,ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import{ Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameControl:ElementRef;
  @ViewChild('amountInput') amountControl:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem()
  {
    const name = this.nameControl.nativeElement.value;
    const amount = this.amountControl.nativeElement.value;
    const newIngredient:Ingredient = new Ingredient(name,amount);     
    this.ingredientAdded.emit(newIngredient);
  }

  onAddItemTemplate(name,amount)
  {
  console.log(name.value);
  console.log(amount.value);
  }
}
