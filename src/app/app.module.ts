import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationBarComponent } from './AuthenticationBar/AuthenticationBar.component';
import { LogoSectionComponent } from './LogoSection/LogoSection.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationBarComponent,
    LogoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
