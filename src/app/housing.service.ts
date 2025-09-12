import { Injectable } from '@angular/core';
import { SiteInfo } from './siteinfo';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  
  url = 'http://localhost:3000/locations';

  async getAllSiteInfos(): Promise<SiteInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getSiteInfoById(id: number): Promise<SiteInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}
