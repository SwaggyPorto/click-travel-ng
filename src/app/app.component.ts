import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from './click-travel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Choose your dream destination...';
  travels: any;

  constructor(private ClickTravelService: ClickTravelService) {
  }

  ngOnInit() {
    this.ClickTravelService.getDestinations().subscribe(
      response => {
        return this.travels = response;
      });
  }
}
