import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  title : string = 'Búscador';
  query : string;
  result : string;
  @Input()
  labelButton: string = "Buscar";

  constructor() { 
  }
  
  search(resposta : Event ) {
    this.result= this.query; 
    this.labelButton = "Seach";
    //console.log((<HTMLInputElement>resposta.target).value)
  }

  ngOnInit() {
    //this.labelButton = this.labelButton ? this.labelButton : "Search";
  }

}
