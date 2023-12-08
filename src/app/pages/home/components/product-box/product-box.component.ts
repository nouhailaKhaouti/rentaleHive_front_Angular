import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: '[app-product-box]',
  templateUrl: './product-box.component.html',
})
export class EquipmentBoxComponent {
  @Input() fullWidthMode = false;
  @Input() equipment: Equipment | undefined;
  @Output() addToCart = new EventEmitter();

  constructor() {}

  onAddToCart(): void {
    this.addToCart.emit(this.equipment);
  }
}
