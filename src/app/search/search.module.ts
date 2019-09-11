import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormSearchComponent
  ],
  declarations: [FormSearchComponent],
})
export class SearchModule { }
