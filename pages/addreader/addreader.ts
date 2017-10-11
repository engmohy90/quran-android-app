import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-addreader',
  templateUrl: 'addreader.html',
})
export class AddreaderPage {

  shik = {
    name: "",
    city: "",
    mpURL: ""
  };
  ourshik = "mohy";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  addShik() {


    let toast = this.toastCtrl.create({
      message: 'data added successfully',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
        this.navCtrl.setRoot(LibraryPage);
        // this.navCtrl.setRoot(this.navCtrl.getActive().component)
      }
    );

    toast
      .present();
  };
}

