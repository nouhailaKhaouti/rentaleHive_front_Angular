import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipment } from 'src/app/models/equipment.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  equipments: Array<Equipment> | undefined;
  count = '12';
  sort = 'desc';
  category: string | undefined;
  equipmentsSubscription: Subscription | undefined;
  constructor(
    private cartService: CartService,
    private storeService: StoreService,
    private equipmentService: EquipmentService
  ) {}

  ngOnInit(): void {
    this.getequipments();
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
    this.getequipments();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getequipments();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getequipments();
  }

  // getequipments(): void {
  //   this.equipmentsSubscription = this.storeService
  //     .getAllEquipments(this.count, this.sort, this.category)
  //     .subscribe((_equipments) => {
  //       this.equipments = _equipments;
  //     });
  // }
  getequipments(): void {
    this.equipmentService.getAllEquipment().subscribe(
      (equipment: Equipment[]) => {
        this.equipments = equipment;
        console.log('Equipment List:', this.equipments);
      },
      (error) => {
        console.error('Error fetching equipment:', error);
      }
    );
  }

  onAddToCart(equipment: Equipment): void {
    this.cartService.addToCart({
      equipment: equipment.image,
      name: equipment.name,
      price: equipment.price_per_day,
      quantity: 1,
      id: equipment.id,
    });
  }

  ngOnDestroy(): void {
    if (this.equipmentsSubscription) {
      this.equipmentsSubscription.unsubscribe();
    }
  }
}
