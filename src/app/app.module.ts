import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { prependPipe } from './prepend.pipe';
import { AppComponent } from './app.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective }    from './unless.directive';
import { AddProductComponent } from './add.product.component';

@NgModule({
  declarations: [
    HighlightDirective,
    UnlessDirective,
    prependPipe,
    AppComponent,
    LifeCycleHooksComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
