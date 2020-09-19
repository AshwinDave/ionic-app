import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuysellPageRoutingModule } from './buysell-routing.module';

import { BuysellPage } from './buysell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuysellPageRoutingModule
  ],
  declarations: [BuysellPage]
})
export class BuysellPageModule {}
