import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add.product.component';

const routes: Routes = [
  { path: '', redirectTo: '/life-cycle-hooks', pathMatch: 'full' },
  { path: 'life-cycle-hooks',  component: LifeCycleHooksComponent },
  { path: 'product',  component: ProductComponent },
  { path: 'add',  component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
