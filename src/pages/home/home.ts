import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ModalController } from 'ionic-angular';
import { EventModalPage } from '../event-modal/event-modal'
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events: Observable<any>;

  constructor(public navCtrl: NavController, public http: Http, public angfire: AngularFireDatabase, public modalCtrl: ModalController) {
    // this.events = null;
    this.events = angfire.list('events').valueChanges();
    // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json())
    // .subscribe(
    //   data => {
    //     this.events = data.data.children;
    // },
    //   err => {
    //     console.log("Error");
    //   });

  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(EventModalPage, characterNum);
    modal.present();
  }

  // incrementDate(date, amount) {
  //       var tmpDate = new Date(date);
  //       tmpDate.setDate(tmpDate.getDate() + amount)
  //       return tmpDate;
  //   }
  //
  //   //create fake events, but make it dynamic so they are in the next week
  //   createEvents(){
  //   this.events.push(
  //       {
  //           "title":"Meetup on Ionic",
  //           "description":"We'll talk about beer, not Ionic.",
  //           "date":this.incrementDate(new Date(), 1)
  //       }
  //   );
  //   this.events.push(
  //       {
  //           "title":"Meetup on Beer",
  //           "description":"We'll talk about Ionic, not Beer.",
  //           "date":this.incrementDate(new Date(), 2)
  //       }
  //   );
  //   this.events.push(
  //       {
  //           "title":"Ray's Birthday Bash",
  //           "description":"Celebrate the awesomeness of Ray",
  //           "date":this.incrementDate(new Date(), 4)
  //       }
  //   );
  //   this.events.push(
  //       {
  //           "title":"Code Review",
  //           "description":"Let's tear apart Ray's code.",
  //           "date":this.incrementDate(new Date(), 5)
  //       }
  //   );
  //   return this.events;
  // }
}
