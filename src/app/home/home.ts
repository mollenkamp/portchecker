import {Component, inject} from '@angular/core';
import {SiteService} from '../site.service';
import {SiteRequest} from '../siteinfo';
import {Site} from '../site/site';

@Component({
  selector: 'app-home',
  imports: [Site], 
  styleUrl: './home.css',
  templateUrl: './home.html'
})

export class Home {
  filteredLocationList: SiteRequest[] = [];
  siteRequestList: SiteRequest[] = [];
  siteService: SiteService = inject(SiteService);

  constructor() {
    this.siteService
      .getAllSiteRequests()
      .then((siteRequestList: SiteRequest[]) => {
        this.siteRequestList = siteRequestList;
        this.filterResults('');
      });

  }  

  filterResults(text: string) {
    if(!text)
    {
      this.filteredLocationList = this.siteRequestList;
      return;
    }
    this.filteredLocationList = this.siteRequestList.filter((siteRequest) =>
      siteRequest.host.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
