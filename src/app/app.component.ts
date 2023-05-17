import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <header-component></header-component>
  <home-component></home-component>
  <footer-component></footer-component>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ingenieria-1403';
}
