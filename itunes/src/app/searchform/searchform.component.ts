import { FormData } from './data/FormData';
import { Component, OnInit } from '@angular/core';
import { ItunessearchService } from '../services/itunessearch.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  songs: String[] = [];
  formData: FormData[] = [];
  fd: FormData = new FormData();
  tracks: String[] = [];

  constructor(public service: ItunessearchService) {
  }

  ngOnInit() {
  }

  search() {
    this.formData.push(this.fd);
    var response = this.service.get(this.fd.artist);
    console.log(this.fd.artist,response);
    response.subscribe((resp) => {
      for (let i = 0; i < 5; i++) {  
        let track = resp.results[i].trackName;
        this.tracks.push(track);
      }
    });
    this.fd = new FormData();
  }

}
