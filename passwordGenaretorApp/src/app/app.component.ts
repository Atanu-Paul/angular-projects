import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'passwordGenaretorApp';
  //defining a password property and setting it to an empty string
  password = '';

  onButtonClick() {
    console.log(`Button was clicked`);
    this.password = 'Password 1';
  }

  // showName() {
  //   return 'A NAME';
  // }
}
