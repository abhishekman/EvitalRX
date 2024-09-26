import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PurchaseComponent } from './purchase/purchase.component';

import { AdminOuterComponent } from './admin-outer/admin-outer.component';
import { AuthGuard } from '../auth.guard';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';

const routes: Routes = [
  {path:'admin-header',component:AdminHeaderComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'purchase',component:PurchaseComponent},

  {path:'admin-outer',component:AdminOuterComponent, canActivate: [AuthGuard]},
  {path:'addpatient',component:AddpatientComponent},
  {path:'viewpatient',component:ViewpatientComponent},
  {path:'placeorder',component:PlaceorderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
