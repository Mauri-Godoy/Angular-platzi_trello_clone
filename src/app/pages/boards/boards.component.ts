import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faBorderAll, faWaveSquare, faChevronDown, faChevronUp, faHeart, faUsers, faHammer } from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  faClock = faClock;
  faPlus = faPlus;
  faBorderAll = faBorderAll;
  faWaveSquare = faWaveSquare;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faHeart = faHeart;
  faUsers = faUsers;
  faTrello = faTrello;
  faHammer = faHammer;

  constructor() { }

  ngOnInit(): void {
  }

}
