import { Component, input } from '@angular/core';
import { SiteLocationInfo } from '../siteinfo';
import { SiteLocation } from '../site-location/site-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site-location',
  imports: [RouterModule, SiteLocationInfo, SiteLocation],
  template: `
    <section class="listing">
      <a [routerLink]="['/details', siteInfo().id]">Learn More</a>
      <img
        class="listing-photo"
        [src]="siteInfo().photo"
        alt="Exterior photo of {{ siteInfo().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ siteInfo().name }}</h2>
      <p class="listing-location">{{ siteInfo().port }}, {{ siteInfo().success }}</p>
    </section>
  `,
  styleUrl: './site-location.css'
})

export class siteInfo {
  SiteInfo = input.required<SiteInfo>();  
}
