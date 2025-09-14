import { Component, input } from '@angular/core';
import { SiteRequest, SiteInfo } from '../siteinfo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site',
  imports: [RouterModule],
  templateUrl: './site.html',
  styleUrl: './site.css'
})

export class Site {
  siteRequest = input.required<SiteRequest>();
}
