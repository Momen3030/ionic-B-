import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserviewPage } from './userview/userview.page';

import {UserviewPageModule} from "./userview/userview.module";

import { RegisterPage } from './register/register.page';
import {RegisterPageModule} from "./register/register.module";

import { LoginPage } from './login/login.page';
import {LoginPageModule} from "./login/login.module";

@NgModule({
  declarations: [AppComponent,
    // UserviewPage,
    // RegisterPage,
    // LoginPage
  
  ],
  entryComponents: [
    UserviewPage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoginPageModule,
    UserviewPageModule,
    RegisterPageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
