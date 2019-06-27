import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../constants';
import {PlaceRequests} from '../model/PlaceRequests';

@Injectable({
  providedIn: 'root'
})
export class PlacerequestService {

  constructor(private http: HttpClient) {
  }

  getPlaceRequestsByManager() {
    return this.http.get<PlaceRequests[]>(apiURL + `requests`);
  }

  declinePlaceRequest(id: number) {
    return this.http.put<PlaceRequests>(apiURL + `requests/${id}`, {});
  }

  acceptPlaceRequest(id: number) {
    return this.http.patch<PlaceRequests>(apiURL + `requests/${id}`, {});
  }

  createPlaceRequest(placeId: number) {
    return this.http.post<PlaceRequests>(apiURL + `requests/${placeId}`, {});
  }

  getPlaceRequestsByUsername(username: string) {
    return this.http.get <PlaceRequests[]>(apiURL + `requests?user=${username}`);
  }
}
