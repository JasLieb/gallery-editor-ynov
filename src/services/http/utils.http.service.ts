import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const BASE_ROUTE = 'https://nominatim.openstreetmap.org/reverse';

@Injectable()
export class UtilsHttpService {

    constructor(
        private httpClient: HttpClient
    ) {}
    
    getAddressLocation(location: any): Observable<any> {
        return this.httpClient.get(`${BASE_ROUTE}?format=json&lat=${location.lat}&lon=${location.lon}&zoom=12&addressdetails=1`);
    }
}