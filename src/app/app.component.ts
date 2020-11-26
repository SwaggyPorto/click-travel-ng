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
  tickets: any;

  constructor(private ClickTravelService: ClickTravelService) {
    this.travels = "";
  }

  ngOnInit() {
    this.ClickTravelService.getDestinations().subscribe(
      response => {
        return this.travels = response;
    });
  }

  getTicket(city: string): void {
    console.log(city);
    this.ClickTravelService.getTickets(city).subscribe(
      response => {
        return this.tickets = response;
    });
  }
}
