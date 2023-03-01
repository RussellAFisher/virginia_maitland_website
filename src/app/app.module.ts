import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatButtonModule} from "@angular/material/button";
import { AboutComponent } from './components/about/about.component';
import { ArtSlideshowComponent } from './components/art-slideshow/art-slideshow.component';
import { ProfessionalHistoryComponent } from './components/professional-history/professional-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AboutComponent,
    ArtSlideshowComponent,
    ProfessionalHistoryComponent
  ],
  imports: [
    AppRoutingModule,
    FlexLayoutModule,
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
