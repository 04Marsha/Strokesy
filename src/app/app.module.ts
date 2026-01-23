import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './About/About.component';
import { ScreenElementsModule } from './ScreenElements/ScreenElements.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './Contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScreenElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
