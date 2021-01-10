import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * title = 'passwordGenaretorApp';
   * defining a password property and setting it to an empty string
   * password ,haveletter, haveNumber, haveSymbol are all example of default
   * state variables with a default state value. This is equivelant to reacts state object.
   */

  password = '';
  haveLetter = false;
  haveNumber = false;
  haveSymbols = false;
  passwordLenght = 0;

  onChangeUseLetters() {
    this.haveLetter = !this.haveLetter;
  }

  onChangeUseNumbers() {
    this.haveNumber = !this.haveNumber;
  }

  onChangeUseSymbols() {
    this.haveSymbols = !this.haveSymbols;
  }

  onInput(value: string) {
    //value is the name of the variable and can be anything we want 'string' after ':' is the type of the variable
    //it is same as 'string value;' type of decalartion in java.

    let parsedValue = Number(value); // type casting the string value to int.

    if (!isNaN(parsedValue)) {
      this.passwordLenght = parsedValue;
    }
  }

  onButtonClick() {
    // console.log(this.haveLetter, 'Letters');
    // console.log(this.haveNumber, 'Numbers');
    // console.log(this.haveSymbols, 'Symbols');
    // this.password = 'Password 1';

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const sysmbols = '!@#$%^&*()_+-';

    let validChars = '';
    if (this.haveLetter) {
      validChars += letters;
    }
    if (this.haveNumber) {
      validChars += numbers;
    }
    if (this.haveSymbols) {
      validChars += sysmbols;
    }

    let newGeneratedPassword = '';

    for (let i = 0; i < this.passwordLenght; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      newGeneratedPassword += validChars[index];
    }
    this.password = newGeneratedPassword;
  }

  // showName() {
  //   return 'A NAME';
  // }
}
