import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faShop, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faTrashCan = faTrashCan;
    faPenToSquare =faPenToSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
