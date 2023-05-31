import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name!:string;
  constructor(private scrollService: ScrollService) { }

  scrollToElement(elementId: string) {
    this.name = elementId;
    this.scrollService.scrollElement(elementId);
  }
}
