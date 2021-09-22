import { Component } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { IFilme } from '../models/iFilme.model';
import { ModalPage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  listVideos: IFilme[] = [
    {
      name: 'Infinito (2021)',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mLvjQ0IIdzZfQzQXULI7sIVxd8V.jpg',
      releaseDate: '10/06/2021 (FR)',
      duration: '1h 46m',
      classification: 75,
      genre: ['Ficção científica', 'Ação', 'Thriller']

    },
    {
      name: 'Eu Acredito (2017)',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2xtqkht2u7SkrZPd6zyMRymE4nt.jpg',
      releaseDate: '06/06/2019 (BR)',
      duration: '1h 29m',
      classification: 70,
      genre: ['Família']

    }
  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public modalController: ModalController,
    ) {}

  async filmModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

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
