import {Component, inject} from '@angular/core';
import {siteInfo} from '../housing-location/housing-location';
import {HousingService} from '../housing.service';
import {SiteInfo} from '../siteinfo';

@Component({
  selector: 'app-home',
  imports: [siteInfo], 
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Site" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for(siteInfo of filteredLocationList; track $index) {
        <app-housing-location [siteInfo]="siteInfo"></app-housing-location>
      }
      </section>
  `
})
export class Home {
  filteredLocationList: SiteInfo[] = [];
  siteInfoList: SiteInfo[] = [];
  housingService: HousingService = inject(HousingService);
 
  constructor() {
    this.housingService
      .getAllSiteInfos()
      .then((siteInfoList: SiteInfo[]) => {
        this.siteInfoList = siteInfoList;
        this.filteredLocationList = siteInfoList;
      });
  }  

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.siteInfoList;
      return;
    }
    this.filteredLocationList = this.siteInfoList.filter((siteInfo) =>
      siteInfo.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
