import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPagePageRoutingModule } from './modal-page-routing.module';

import { ModalPage } from './modal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPagePageRoutingModule
  ],
  declarations: [ModalPage]
})
export class ModalPagePageModule {}
