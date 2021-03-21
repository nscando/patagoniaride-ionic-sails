import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/services/ride';
import { Ride } from '../../models/ride';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.page.html',
  styleUrls: ['./rides.page.scss'],
})
export class RidesPage implements OnInit {
  rides: Observable<[Ride]>;
  constructor(private rideService: RideService) {}

  ngOnInit() {
    this.rides = this.rideService.getAll();
  }
}
