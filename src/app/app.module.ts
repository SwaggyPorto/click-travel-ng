import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ClickTravelService } from './click-travel.service';
import { HttpClientModule } from '@angular/common/http';
import { ClickTravelPipe } from './click-travel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ClickTravelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClickTravelService,
    ClickTravelPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
