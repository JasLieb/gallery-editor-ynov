import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,    public authService: AuthenticationService,
    public router: Router) {
  }

//fonction d inscription
signUp(email, password){
  this.authService.RegisterUser(email.value, password.value)
  .then((res) => {
    
    this.authService.SendVerificationMail()
    this.router.navigate(['verify-email']);
  }).catch((error) => {
    window.alert(error.message)
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
