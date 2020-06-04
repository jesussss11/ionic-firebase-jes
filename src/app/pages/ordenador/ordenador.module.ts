import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenadorPageRoutingModule } from './ordenador-routing.module';

import { OrdenadorPage } from './ordenador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenadorPageRoutingModule
  ],
  declarations: [OrdenadorPage]
})
export class OrdenadorPageModule {}
