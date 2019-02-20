import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItunessearchService {

  constructor(private http:HttpClient) { }

  get(artist: String) {
    return this.http.get("https://itunes.apple.com/search?term=" + artist + "&limit=5");
  }
}
