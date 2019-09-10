import { Component } from '@angular/core';
//import { search } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first App';
  constructor(){
    this.title ="Hello World";
  }
}
