import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';
  password: String = '';
  showElement = false;
 

  closeModal() {
    this.showElement = false;
  }
  openModal() {
    this.showElement = true;
  }
  
  items:string[] = ['cotton candy','chocolate','ice-cream','lolli pop','biscuit']

  onSubmit() {
    const username = this.username
    const password = this.password
    //do something like make an api request here placing details as props

    console.log('User details: ', {username,password})
  }

}
