import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {


  @Input() nomes: string[];
  @Input() cargasHorarias: string[];
  constructor() { }


  ngOnInit(): void {
  }

}
