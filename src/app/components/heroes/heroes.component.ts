import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes:Heroe[] = [];

  constructor(private _heroesServices: HeroesService,
              private route: Router) { }

  ngOnInit(): void {

    this.heroes = this._heroesServices.getHeroes();

    console.log(this.heroes);
    

  }

  verHeroe(idx: number){
    this.route.navigate(['/heroe', idx])
  }

}
