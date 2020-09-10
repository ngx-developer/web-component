import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { ScoreCounterComponent } from './score-counter/score-counter.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    ScoreCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents :  [
    ScoreCounterComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const scoreCounter = createCustomElement(ScoreCounterComponent, { injector });
    customElements.define('custom-score', scoreCounter);
  }
  ngDoBootstrap() {}
}
