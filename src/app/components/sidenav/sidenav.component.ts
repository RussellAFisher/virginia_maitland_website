import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public sidenavLinks = [
    {
      name: "About",
      route: ""
    },
    {
      name: "Photo Gallery",
      route: "/art-slideshow"
    },
    {
      name: "Professional History",
      route: "/professional-history"
    },
    {
      name: "Press",
      route: ""
    },
    {
      name: "Video",
      route: ""
    },
    {
      name: "Contact",
      route: ""
    },
    {
      name: "Artwork Index",
      route: ""
    }
  ];

  constructor(private router: Router) {
  }

  public navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
