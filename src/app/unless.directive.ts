import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * Add the template content to the DOM unless the condition is true.
 *
 * If the expression assigned to `myIf` evaluates to a truthy value
 * then the templated elements are removed removed from the DOM,
 * the templated elements are (re)inserted into the DOM.
 *
 * <div *ngIf="errorCount" class="success">
 *   Congrats! Everything is great!
 * </div>
 *
 * ### Syntax
 *
 * - `<div *myIf="condition">...</div>`
 * - `<div template="myIf condition">...</div>`
 * - `<template [myIf]="condition"><div>...</div></template>`
 *
 */
@Directive({ selector: '[myIf]'})
export class UnlessDirective {
  private hasView = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  @Input() set myIf(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}