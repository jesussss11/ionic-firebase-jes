import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenadorPage } from './ordenador.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenadorPageRoutingModule {}
