import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  constructor(private sanitizer: DomSanitizer) { }

  safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://angular.cn/");
}
