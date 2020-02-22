import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SquarePipe } from './square.pipe';
import { PowserBoosterComponent } from './powser-booster/powser-booster.component';
import { ExponentialPipe } from './exponential.pipe';
import { PurePipe } from './pipe/pure.pipe';
import { ImpurePipe } from './pipe/impure.pipe';
import { PageNotFOundComponent } from './page-not-found/page-not-found.component';
import { DateConsumerComponent } from './date-consumer/date-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SquarePipe,
    PowserBoosterComponent,
    ExponentialPipe,
    PurePipe,
    ImpurePipe,
    PageNotFOundComponent,
    DateConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
