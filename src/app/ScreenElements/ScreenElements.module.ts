import { NgModule } from '@angular/core';
import { AuthenticationBarComponent } from './AuthenticationBar/AuthenticationBar.component';
import { CommonModule } from '@angular/common';
import { LogoSectionComponent } from './LogoSection/LogoSection.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { GlimpsesComponent } from './Glimpses/glimpses.component';
import { SubscribeComponent } from './Subscribe/subscribe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthenticationBarComponent,
    LogoSectionComponent,
    NavBarComponent,
    GlimpsesComponent,
    SubscribeComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AuthenticationBarComponent,
    LogoSectionComponent,
    NavBarComponent,
    GlimpsesComponent,
    SubscribeComponent
  ],
})
export class ScreenElementsModule {}
