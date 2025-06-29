import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dir1Directive } from './shared/dir1.directive';
import { CustompipePipe } from './shared/custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Dir1Directive,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
