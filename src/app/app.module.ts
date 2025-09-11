import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationBarComponent } from './AuthenticationBar/AuthenticationBar.component';
import { LogoSectionComponent } from './LogoSection/LogoSection.component';
import { NavBarComponent } from './NavBar/NavBar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationBarComponent,
    LogoSectionComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
