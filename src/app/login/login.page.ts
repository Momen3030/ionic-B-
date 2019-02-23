import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users:any;
  username: string ='';
  password: string ='';
  constructor(private _UserService:RestApiService ,private router: Router ) { }
 
  ngOnInit() {

    this._UserService.apiData.subscribe(
      (users) => { this.users = users.data;
          console.log(this.users); });
  }
  


  login() {
      

       console.log(`${this.username} password: ${this.password} `);
    
        for (let i = 0; i < this.users.length; i++) {
           
              if (this.users[i].username === this.username
                 && this.users[i].password === this.password){
                  this.router.navigateByUrl('/register');
                } 
            else {
              this.router.navigateByUrl('/home');
            }
        
    }
  }





}
