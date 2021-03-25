import { Component, OnInit } from '@angular/core';
import { DEFAULT_RIDE_OBJECT, Ride } from 'src/models/ride';
import { RideService } from 'src/services/ride';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.page.html',
  styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {
  id: string;
  ride: Ride = DEFAULT_RIDE_OBJECT;

  constructor(
    private rideService: RideService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rideService.getById(this.id).subscribe((data: Ride) => {
      this.ride = data;
      console.log(data);
    });
  }

  delete() {
    this.rideService.delete(this.ride.id).subscribe(
      (data) => {
        alert('Delete succes!');
        console.log(data);
        this.navCtrl.pop();
      },
      (error) => {
        alert('Cannot delete the rodada');
        console.error(error);
      }
    );
  }
}
