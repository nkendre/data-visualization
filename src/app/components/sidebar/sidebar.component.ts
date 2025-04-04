import { Component } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
 // rtlTitle: string;
  icon: string;
  class: string;
}
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/dasboardapex",
    title: "dasboardapex",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/dasboardhighchart",
    title: "dasboardhighchart",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    icon: "icon-world",
    class: ""
  }
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor() {}
  menuItems: any[]=[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

