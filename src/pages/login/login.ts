import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from "../../services/authentication.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,    public authService: AuthenticationService,
    public router: Router) {
  }


  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
