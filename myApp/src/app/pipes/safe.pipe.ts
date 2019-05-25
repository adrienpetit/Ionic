import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

//Pipe permettant de Bypass la sécurité conernant les URL (notamment pour les vidéos Youtube)

/**
* Pipe to ByPass Security of Angular on URL
* @returns URL accepted
*/
@Pipe({
  name: 'safeUrl'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }

transform(url) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}
