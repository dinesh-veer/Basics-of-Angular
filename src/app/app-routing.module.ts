import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { PowserBoosterComponent } from './powser-booster/powser-booster.component';
import { PageNotFOundComponent } from './page-not-found/page-not-found.component';
import { DateConsumerComponent } from './date-consumer/date-consumer.component';


const routes: Routes = [
    {
    path:"newComponent",
    component: NewCmpComponent
  },
  {
    path:"powerBooster/:id",
    component:PowserBoosterComponent
  },
  //{
   // path:"",
    //redirectTo:'/newComponent',
    //component:PowserBoosterComponent,
   // pathMatch:'full'
  //},
  {
    path:"date",
    component:DateConsumerComponent
  },
  {
    path:'**',
    component:PageNotFOundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
