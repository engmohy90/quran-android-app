import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {NgModel} from "@angular/forms";
import {ToastController} from "ionic-angular";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-call-us',
  templateUrl: 'call-us.html',
})
export class CallUsPage {

  message = {
    name: "",
    context: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController, public viewCtrl: ViewController) {
  }

  sendMessage() {

    console.log(this.message)

    let toast = this.toastCtrl.create({
      message: 'message sent successfully',
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
  }

}
