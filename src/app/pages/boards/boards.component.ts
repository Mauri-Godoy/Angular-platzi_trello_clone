import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faBorderAll, faWaveSquare, faChevronDown} from '@fortawesome/free-solid-svg-icons'

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
  constructor() { }

  ngOnInit(): void {
  }

}
