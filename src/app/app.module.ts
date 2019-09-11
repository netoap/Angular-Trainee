import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchModule } from './search/search.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOwnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
