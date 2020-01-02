import { Component } from '@angular/core';

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Static Web NG My-Store';

  constructor(private adalSvc: MsAdalAngular6Service) {
    if (!this.adalSvc.isAuthenticated) this.adalSvc.login();
    console.log(this.adalSvc.userInfo);
    this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
      console.log(token);
    });
  }
}
