import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <header-component></header-component>
  <router-outlet></router-outlet>
  <footer-component></footer-component>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ingenieria-1403';
}
