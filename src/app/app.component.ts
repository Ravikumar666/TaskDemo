import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn: boolean = false;

  onLogout(): void {
    this.loggedIn = false;
  }

  onLogin(credentials: { email: string, password: string }): void {
    console.log(credentials)
    if (credentials.email !== '' && credentials.password !== '') {
      this.loggedIn = true;
    } else {
      console.log('Login failed');
    }
  }
}
