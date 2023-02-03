import { Component } from '@angular/core';

@Component({
  selector: 'work-inner-component',
  templateUrl: './inner-component.component.html',
  styleUrls: ['./inner-component.component.scss'],
})
export class InnerComponentComponent {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
