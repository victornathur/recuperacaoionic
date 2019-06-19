import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-materiais-modal',
  templateUrl: './material-modal.page.html',
  styleUrls: ['./material-modal.page.scss'],
})
export class MaterialModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  novo_material = {
    "nome": ""
  }
  add() {
  this.modalController.dismiss(this.novo_material)
  }
}
