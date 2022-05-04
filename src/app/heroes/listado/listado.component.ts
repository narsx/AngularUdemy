import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado : string = '';
  borrarHeroes() {
    this.heroeBorrado = this.heroes.shift()  || '';
  }
}
