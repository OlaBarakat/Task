import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
