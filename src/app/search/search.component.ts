import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title : string = 'Búscador';
  query : string;
  result : string;

  @Input()
  labelButton: string;

  constructor() { 
  }
  onClickResult() {
    this.result= this.query;
  }
  // search(query:string){
  //   this._query=query
  // }

  ngOnInit() {
    this.labelButton = this.labelButton ? this.labelButton : "Search";
  }

}
