import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Basic Angular Concepts';
  username: string = '';
  password: String = '';
  showElement = false;
  items:string[] = ['item1','item2','item3']

  onSubmit() {
    const username = this.username
    const password = this.password

    console.log('User details: ', {username,password})
  }
  closeModal() {
    this.showElement = false;
  }
  openModal() {
    this.showElement = true;
  }
}
