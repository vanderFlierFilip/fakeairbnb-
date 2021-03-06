import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
 
  rentals: any[] = [];

  constructor(private rentalService: RentalService) { 
  }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      (rentals) => {
        this.rentals = rentals;
      },
      (err) => {
        console.log(err);
      },
      () => {

      });
  }

}
