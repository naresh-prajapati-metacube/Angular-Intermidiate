import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add.product.component';
import { FormBuilder } from '@angular/forms';
import { prependPipe } from 'src/app/prepend.pipe';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent, prependPipe ],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
