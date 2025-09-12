import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {SiteInfo} from '../siteinfo';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <img
        class="listing-photo"
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
        </ul>
      </section>
    </article>
  `,
})

export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  siteInfo: SiteInfo | undefined;

  constructor() {
    const siteInfoId = Number(this.route.snapshot.params['id']);
    this.housingService.getSiteInfoById(siteInfoId).then(location => {
      this.siteInfo = location;
    });
  }
}