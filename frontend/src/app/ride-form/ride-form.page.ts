import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RideService } from '../../services/ride';
import { DEFAULT_RIDE_OBJECT, Ride } from '../../models/ride';

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.page.html',
  styleUrls: ['./ride-form.page.scss'],
})
export class RideFormPage implements OnInit {
  id: string;
  editing: boolean = false;
  ride: Ride = DEFAULT_RIDE_OBJECT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private rideService: RideService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editing = this.id !== 'new';
    if (this.editing) {
      this.rideService.getById(this.id).subscribe(
        (data: Ride) => {
          this.ride = data;
          console.log(data);
        },
        (error) => {
          alert('Cannot get de ride');
          console.error(error);
        }
      );
    }
  }
  save() {
    if (this.editing) {
      this.rideService.update(this.ride).subscribe(
        (data) => {
          alert('Your rodada was updated');
          this.navCtrl.pop();
          console.log(data);
        },
        (error) => {
          alert("Something's wrong, try again");
          console.error(error);
        }
      );
    } else {
      this.rideService.create(this.ride).subscribe(
        (data) => {
          alert('Your rodada was Created');
          this.navCtrl.pop();
          console.log(data);
        },
        (error) => {
          alert("Something's wrong, try again");
          console.error(error);
        }
      );
    }
  }
}
