import { Component } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { NavController, NavParams } from '@ionic/angular';
import { UserviewPage } from '../userview/userview.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users:any;

    constructor(private _user:RestApiService,public nvctrl:NavController,private router: Router){
       this.getUsers();

    }

    ViewUser(userId :number){

      this.router.navigateByUrl('/userview');

      console.log(userId);
    }

    // getUsers() {
    //   this._user.getUsers()
    //   .then(data => {
    //     this.users = data.data;
    //     console.log(this.users);
    //   });
    // }
getUsers(){
  this._user.apiData.subscribe(data =>{
    this.users=data.data;
    console.log(this.users);
  } );
}
   
}
