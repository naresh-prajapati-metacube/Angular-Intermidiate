import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add.product.component.html',
  styleUrls: ['./add.product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      label: [''],
      price: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  saveProduct() {
    console.log(this.productForm)
    const productData = new FormData();
    this.productForm.get('title')
  }
}
