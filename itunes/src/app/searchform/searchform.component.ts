import { FormData } from './data/FormData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  songs: String[] = ["killshot","lose yourself","rap god","venom"];
  
  formData: FormData[] = [];
  artist = '';
  year = 0;

  constructor() { 
  }

  ngOnInit() {
  }

  search(){
    var fd:FormData = new FormData();
    fd.artist = this.artist; 
    fd.year = this.year;
    this.formData.push(fd);
  }

}
