import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from "../../services/authentication.service";


/**
 * Generated class for the VerifyEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-email',
  templateUrl: 'verify-email.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthenticationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyEmailPage');
  }

}
