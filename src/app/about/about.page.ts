import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  
  constructor(private sanitizer: DomSanitizer) { }

  safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://43.226.37.27:8084/stormfa.htm");
}
