import { Input, Output,EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroes',
  templateUrl: './card-heroes.component.html',
  styleUrls: ['./card-heroes.component.css']
})
export class CardHeroesComponent implements OnInit {

  //va a recibir desde afuera, la informacion, desde la pagina y por eso muestra segun lo que venga...
  @Input() cardHeroe:any={};
  @Input() index!: number;

  //paso1 del output
  @Output() heroeSeleccionado!: EventEmitter<number>;

  constructor(private route: Router) {
  //paso2 del output
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){

  //paso3 del output

  this.heroeSeleccionado.emit(this.index);

    
  }



}
