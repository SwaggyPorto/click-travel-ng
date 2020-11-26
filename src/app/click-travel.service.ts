import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { Destination} from './entities/destination'; 
import { map } from 'rxjs/operators'; 
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root' 
}) 

export class ClickTravelService { 
  constructor(private http: HttpClient) { } 
  
  getDestinations(): Observable<Destination[]> { 
    return this.http.get("https://travel-api.clicksomeone.com/destinations").pipe( 
      map( (jsonArray: Object[]) => jsonArray.map(jsonItem => Destination.fromJson(jsonItem)) )
    );} 
  }


