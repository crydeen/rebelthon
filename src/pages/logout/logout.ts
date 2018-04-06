import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ModalController } from 'ionic-angular';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }

  yes() {
    let logout_alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: "You have been logged out!",
      buttons: [{
        text:'OK',
        handler: () => {
          this.navCtrl.setRoot(TabsPage);
        }
        }]
    });
    firebase.auth().signOut().then(function() {
      logout_alert.present();
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }
  no() {
    this.navCtrl.pop();
  }

}