import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users:any;
  username: string ='';
  password: string ='';
  constructor(private _UserService:RestApiService ) { }
 
  ngOnInit() {

    // this._UserService.apiData.subscribe(
    //   (users) => { this.users = users.data;
    //       console.log(this.users); });
  }
  


  login() {
      

       console.log(this.username);
    
        // for (let i = 0; i < this.users.length; i++) {
           
        //       if (this.users[i].email === this.form.value.email
        //          && this.users[i].userpass === this.form.value.password){
        //         this.myRoute.navigate(['cartproducts']); 
        //         } 
        //     else {
        //         this.myRoute.navigate(['home']);
        //     }
        
    }





}
