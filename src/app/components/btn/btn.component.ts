import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() type: 'button' | 'reset' | 'submit' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
