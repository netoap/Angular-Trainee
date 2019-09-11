import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListOwnersComponent } from '../list-owners/list-owners.component';
import { OwnerService } from './owner.service';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    FormSearchComponent, ListOwnersComponent
  ],
  declarations: [FormSearchComponent, ListOwnersComponent],
  providers: [OwnerService],
})
export class SearchModule { }
