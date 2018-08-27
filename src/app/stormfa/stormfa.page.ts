import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stormfa',
  templateUrl: 'stormfa.page.html',
  styleUrls: ['stormfa.page.scss']
})
export class StormfaPage {

  constructor(private sanitizer: DomSanitizer) { }

  safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://43.226.37.27/");
}
 