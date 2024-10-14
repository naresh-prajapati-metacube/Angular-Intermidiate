import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html'
})
export class LifeCycleHooksComponent {
  constructor() { }

  ngOnInit() { this.logIt('ngOnInit called, component has been initialized!'); }

  ngDoCheck(){ this.logIt("ngDoCheck has been called") }

  ngAfterContentInit(){ this.logIt("ngAfterContentInit has been called"); }

  ngAfterContentChecked(){ this.logIt("ngAfterContentChecked has been called") }
  
  ngAfterViewInit(){ this.logIt("ngAfterViewInit has been called") }
  
  ngAfterViewChecked(){ this.logIt("ngAfterViewChecked has been called") }

  ngOnDestroy() { this.logIt('ngOnDestroy called, component has been destroyed'); }

  logIt(msg: string) { console.log(msg); }
}
