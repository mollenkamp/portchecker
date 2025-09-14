import {Component, inject} from '@angular/core';
import {SiteService} from '../site.service';
import {SiteRequest} from '../siteinfo';
import {Site} from '../site/site';

@Component({
  selector: 'app-home',
  imports: [Site], 
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Site" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for(siteRequest of filteredLocationList; track $index) {
        <app-site [siteRequest]="siteRequest"></app-site>
      }
      </section>
  `
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
        this.filteredLocationList = siteRequestList;
      });
  }  

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.siteRequestList;
      return;
    }
    this.filteredLocationList = this.siteRequestList.filter((siteRequest) =>
      siteRequest.host.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
