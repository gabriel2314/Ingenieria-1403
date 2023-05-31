import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollService.getScrollObservable().subscribe((elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
