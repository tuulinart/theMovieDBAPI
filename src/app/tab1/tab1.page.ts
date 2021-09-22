import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async favToast() {
    const toast = await this.toastController.create({
      message: 'Filme favoritado com sucesso!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async showFavAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar este filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        handler: (blah) => {
        console.log('Cancel ok');
        }
      },{
        text: 'Favoritar',
        role: 'fav',
      handler: (blah) => {
        this.favToast();
      }
    }]
    });

    await alert.present();
  }



}
