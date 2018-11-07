import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  ROOTURL = 'http://localhost:3300/users';
  authToken: any;

  constructor(private http: HttpClient) { }


  getArtist(query) {
    return this.http.get(`${this.ROOTURL}/getArtist/${query}`);
  }

}
