import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SiteService} from '../site.service';
import {SiteInfo, SiteRequest} from '../siteinfo';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{ siteRequest?.host }}</h2>
        <p class="listing-location">{{ siteRequest?.port }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this web location</h2>
        <ul>
          <li>Checked: {{ siteRequest?.host }}</li>
          @if(siteInfo?.ip !== siteRequest?.host) {
            <li>IP address: {{ siteInfo?.ip }}</li> 
          }
          @if(siteInfo?.errno ?? 0 > 0) {
            <li>Error: {{ siteInfo?.errno }}</li>
            <li>Description: {{ siteInfo?.errstr }}</li>
            <li>Expected: {{ siteRequest?.expect_open !== true ? 'Closed': 'Open' }}</li>
            <li>Status: {{ siteRequest?.expect_open !== true ? 'Passed': 'Failed' }}</li>
          }
          @else {
            <li>Expected: {{ siteRequest?.expect_open === true ? 'Open': 'Closed' }}</li>
            <li>Status: {{ siteRequest?.expect_open === true ? 'Passed' : 'Failed' }}</li>
          }
        </ul>
      </section>
    </article>
  `,
})

export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  siteService = inject(SiteService);
  siteInfo: SiteInfo | undefined;
  siteRequest: SiteRequest | undefined;
  
  constructor() {
    const siteInfoId = Number(this.route.snapshot.params['id']);
    this.siteService.getSiteRequestById(siteInfoId).then(request => {
      this.siteRequest = request;
      this.siteInfo = request?.info;
    });
  }
}