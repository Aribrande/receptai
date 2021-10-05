import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {
  country;
  world;
  id;
  constructor(private route:ActivatedRoute, private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.world=this.dataService.world;
    this.id=this.route.snapshot.params['id'];
    this.country=this.world[this.id];
  }

  update(code, region,surfaceArea, year, population, lifeExpectancy){
    this.country.Code=code.value;
    this.country.Region=region.value;
    this.country.SurfaceArea=surfaceArea.value;
    this.country.IndepYear=year.value;
    this.country.Population=population.value;
    this.country.LifeExpectancy=lifeExpectancy.value;
    this.router.navigate(['/country',this.id]);

  }

}
