import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.page.html',
  styleUrls: ['./userview.page.scss'],
})
export class UserviewPage implements OnInit {
  id: string;  
  user:any;
  constructor(private navCtrl:NavController,private route: ActivatedRoute , private _user:RestApiService) { }

 
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this._user.getUserByID(this.id).subscribe(response =>  
        {
         this.user= response.data;
         console.log( this.user);
        }
        );



  }


  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }

}
