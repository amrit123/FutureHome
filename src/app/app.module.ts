import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http"
import { AppComponent } from './app.component';
import { RepoComponent } from './components/repo/repo.component';
import { DataService } from "./Service/data.service";
 

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
