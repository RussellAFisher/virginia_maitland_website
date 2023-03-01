import { Component } from '@angular/core';

@Component({
  selector: 'app-art-slideshow',
  templateUrl: './art-slideshow.component.html',
  styleUrls: ['./art-slideshow.component.scss']
})
export class ArtSlideshowComponent {
  public paintings = [
    {
      url: "https://virginiamaitland.com/images/selected_gallery/2018_TopologicalSunset.jpg",
      name: "Topological Sunset",
      year: "2018",
      medium: "Acrylic on canvas",
      size: "48\"x54\""
    },
    {
      url: "https://virginiamaitland.com/images/selected_gallery/2018_Tilt_a_Whirl.jpg",
      name: "Tilt-A-Whirl",
      year: "2018",
      medium: "Acrylic on canvas",
      size: "54\"48\""
    },
    {
      url: "https://virginiamaitland.com/images/selected_gallery/2018_TheOtherSide.jpg",
      name: "The Other Side",
      year: "2018",
      medium: "Acrylic on canvas",
      size: "60\"54\""
    }
  ]

}
