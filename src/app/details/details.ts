import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SiteService} from '../site.service';
import {SiteInfo, SiteRequest} from '../siteinfo';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
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