import { Pipe, PipeTransform } from '@angular/core';

import { Destination } from './entities/destination';

@Pipe({ name: 'ClickTravelPipe' })
export class ClickTravelPipe implements PipeTransform {
  transform(Travels: Destination[]) {
    return Travels.filter(travel => travel.isDreamDestination);
  }
}