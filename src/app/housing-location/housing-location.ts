import { Component, input } from '@angular/core';
import { SiteInfo } from '../siteinfo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
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
  styleUrl: './housing-location.css'
})

export class siteInfo {
  siteInfo = input.required<SiteInfo>();  
}
