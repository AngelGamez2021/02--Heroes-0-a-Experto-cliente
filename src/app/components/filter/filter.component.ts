import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
//es un arreglo porque pueden ser varias coincidencias de busqueda
heroes:Heroe[] = [];
termino!: string;


  constructor(private activatedRoute: ActivatedRoute,
              private _herosService: HeroesService,
              private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     this.termino = params['termino'];
      this.heroes = this._herosService.filterHeroes(params['termino'])
      console.log(this.heroes);
      

    })
  }


  verHeroe(idx: number){
    this.route.navigate(['/heroe', idx])
  }

}
