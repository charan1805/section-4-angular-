import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomecomponentComponent } from './welcomecomponent/welcomecomponent.component';
import { CustomercomponentComponent } from './customercomponent/customercomponent.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomecomponentComponent,
    CustomercomponentComponent,
    OrdercomponentComponent,
    AboutcomponentComponent,
    LogincomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
