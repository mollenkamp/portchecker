import { Component, input } from '@angular/core';
import { SiteRequest } from '../siteinfo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site',
  imports: [RouterModule],
  template: `
    <section class="listing">
      <h2 class="listing-heading">{{ siteRequest().host }}</h2>
      <p class="listing-location">{{ siteRequest().port }}</p>
    </section>
  `,
  styleUrl: './site.css'
})

export class Site {
  siteRequest = input.required<SiteRequest>();
}
