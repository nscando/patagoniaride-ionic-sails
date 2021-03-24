import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RideService } from '../../services/ride';

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.page.html',
  styleUrls: ['./ride-form.page.scss'],
})
export class RideFormPage implements OnInit {
  id: string;
  editing: false;
  constructor(
    private activatedRute: ActivatedRoute,
    private navCtrl: NavController,
    private rideService: RideService
  ) {}

  ngOnInit() {
    this.id = this.activatedRute.snapshot.paramMap.get('id');
    this.editing = this.id !== 'new';
  }
  save() {
    if (this.editing) {
    } else {
      this.rideService.create();
    }
  }
}
