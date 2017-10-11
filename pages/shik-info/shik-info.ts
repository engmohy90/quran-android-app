import { Component } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ShikInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-shik-info',
  templateUrl: 'shik-info.html',
})
export class ShikInfoPage {
  name : string =this.navParams.get("name")

  constructor(public navView: ViewController, public navParams: NavParams) {
  }

 closeShikInfoPage(){
    this.navView.dismiss();
 }
}
