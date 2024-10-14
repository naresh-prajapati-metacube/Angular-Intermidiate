import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('collapsed', style({
        height: 0,
        display: 'none',
        overflow: 'hidden'
      })),
      state('expanded',   style({
        height: 'auto',
        display: 'block',
        overflow: 'none'
      })),
      transition('collapsed => expanded', animate('200ms ease-in')),
      transition('expanded => collapsed', animate('200ms ease-out'))
    ])
  ]
})

export class ProductComponent {
  title = 'Bag - Ubuy';
  imageSrc = 'assets/images/bag.jpg';
  price = 4487.26;
  showShippingDetail = false;
  showShippingTerms = true;

  toggleShippingDetail() {
    this.showShippingDetail = !this.showShippingDetail;
  }
}
