import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {ArtSlideshowComponent} from "./components/art-slideshow/art-slideshow.component";
import {ProfessionalHistoryComponent} from "./components/professional-history/professional-history.component";

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'art-slideshow', component: ArtSlideshowComponent},
  {path: 'professional-history', component: ProfessionalHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
