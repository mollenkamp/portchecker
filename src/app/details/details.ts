import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
<<<<<<< HEAD
import {SiteInfo} from '../siteinfo';
=======
import {HousingLocationInfo} from '../housinglocation';
>>>>>>> origin/main

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <img
        class="listing-photo"
<<<<<<< HEAD
        [src]="siteInfo?.photo"
        alt="Exterior photo of {{ siteInfo?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ siteInfo?.name }}</h2>
        <p class="listing-location">{{ siteInfo?.port }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this web location</h2>
        <ul>
          <li>Posted: {{ siteInfo?.checked }}</li>
          <li>Should fail: {{ siteInfo?.should_fail }}</li>
          <li>Should Succeed: {{ siteInfo?.should_succeed }}</li>
=======
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
>>>>>>> origin/main
        </ul>
      </section>
    </article>
  `,
<<<<<<< HEAD
=======
  styleUrls: ['./details.css']
>>>>>>> origin/main
})

export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
<<<<<<< HEAD
  siteInfo: SiteInfo | undefined;

  constructor() {
    const siteInfoId = Number(this.route.snapshot.params['id']);
    this.housingService.getSiteInfoById(siteInfoId).then(location => {
      this.siteInfo = location;
=======
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(location => {
      this.housingLocation = location;
>>>>>>> origin/main
    });
  }
}