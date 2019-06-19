import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MaterialModalPage } from '../material-modal/material-modal.page';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-lista-material',
  templateUrl: './lista-material.page.html',
  styleUrls: ['./lista-material.page.scss'],
})
export class ListaMaterialPage implements OnInit {

  ngOnInit() {
  }

  constructor(public modalController: ModalController, private storage: Storage) {
    this.storage.get('material').then((material) => {
      if (material) {
        this.materials = material
      }
    })
  }
  add(material) {
    this.materials.push(material)
    this.storage.set('material', this.materials)
  }
  async modal() {
    const modal = await this.modalController.create({
      component: MaterialModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((material) => {
      this.add(material.data)
    })
  }
  
  materials = []
}
  