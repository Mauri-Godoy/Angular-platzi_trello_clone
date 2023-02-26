import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() type: 'button' | 'reset' | 'submit' = 'button';

  // Tailwind no puede leer clases dinámicas
  @Input() color = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  public colorVariants: Map<any, string> = new Map(
    [
      ['success', 'bg-success-600 hover:bg-success-500 focus:ring-success-300'],
      ['primary', ' bg-primary-600 hover:bg-primary-500 focus:ring-primary-300'],
      ['red', ' bg-red-600 hover:bg-red-500 focus:ring-red-300'],
      ['gray-light', ' bg-gray-200 hover:bg-gray-100 focus:ring-gray-50 text-gray-800 text-left']
    ]
  )
}
