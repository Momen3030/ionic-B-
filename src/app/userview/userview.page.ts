import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.page.html',
  styleUrls: ['./userview.page.scss'],
})
export class UserviewPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }


  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }

}
