import { Injectable } from '@angular/core';
import { SiteInfo, SiteRequest } from './siteinfo';

@Injectable({
  providedIn: 'root'
})

export class SiteService {
  
  url = 'https://port-uat.freshupgrades.com/json.php';
  check = 'https://port-uat.freshupgrades.com/check.php';
  
  async getAllSiteRequests(): Promise<SiteRequest[]> {
    const data = await fetch(this.url);    
    return await data.json() ?? [];
  }

  async getSiteRequestById(id: number): Promise<SiteRequest | undefined> {
    const data = await fetch(this.url);
    const json = await data.json();
    const response = await this.postData(json[id]);

    return response;
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }

  async postData(data: any): Promise<SiteRequest> {

    const text = JSON.stringify(data) 
    const response = await fetch(this.check, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: text
    });
    
    data.info = await response.json();
    return data;
  }
}