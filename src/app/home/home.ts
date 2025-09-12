import {Component, inject} from '@angular/core';
<<<<<<< HEAD
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
=======
import {HousingLocation} from '../housing-location/housing-location';
import {HousingService} from '../housing.service';
import {HousingLocationInfo} from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocation], 
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
>>>>>>> origin/main
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
<<<<<<< HEAD
      @for(siteInfo of filteredLocationList; track $index) {
        <app-housing-location [siteInfo]="siteInfo"></app-housing-location>
      }
      </section>
  `
})
export class Home {
  filteredLocationList: SiteInfo[] = [];
  siteInfoList: SiteInfo[] = [];
=======
      @for(housingLocation of filteredLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
      </section>
  `,
  styleUrls: ['./home.css']
})
export class Home {
  filteredLocationList: HousingLocationInfo[] = [];
  housingLocationList: HousingLocationInfo[] = [];
>>>>>>> origin/main
  housingService: HousingService = inject(HousingService);
 
  constructor() {
    this.housingService
<<<<<<< HEAD
      .getAllSiteInfos()
      .then((siteInfoList: SiteInfo[]) => {
        this.siteInfoList = siteInfoList;
        this.filteredLocationList = siteInfoList;
=======
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
>>>>>>> origin/main
      });
  }  

  filterResults(text: string) {
    if (!text) {
<<<<<<< HEAD
      this.filteredLocationList = this.siteInfoList;
      return;
    }
    this.filteredLocationList = this.siteInfoList.filter((siteInfo) =>
      siteInfo.name.toLowerCase().includes(text.toLowerCase()),
=======
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
>>>>>>> origin/main
    );
  }
}
