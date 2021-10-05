import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country;
  world;
  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    this.world=this.dataService.world;

    let id=this.route.snapshot.params['id'];
    this.country=this.world[id];
    console.log(id);

    this.route.params.subscribe((params:Params)=>{
      id=params['id'];
      this.country=this.world[id];
    });

  }

}
