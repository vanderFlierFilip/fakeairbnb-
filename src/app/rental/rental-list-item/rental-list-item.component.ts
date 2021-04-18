import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {

  @Input() rentalItem: any;
  constructor() { }

  ngOnInit() {
  }

}
