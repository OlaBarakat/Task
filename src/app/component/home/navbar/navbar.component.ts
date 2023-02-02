import { Component, OnInit } from '@angular/core';
import { faCircleUser, faGear, faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faShop = faShop;
  faGear = faGear;
  faCircleUser = faCircleUser;
  constructor() { }

  ngOnInit(): void {
  }

}
