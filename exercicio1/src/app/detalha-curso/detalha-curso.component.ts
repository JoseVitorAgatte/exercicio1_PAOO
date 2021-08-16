import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-detalha-curso',
  templateUrl: './detalha-curso.component.html',
  styleUrls: ['./detalha-curso.component.css']
})
export class DetalhaCursoComponent implements OnInit {

  public formCurso: FormGroup;


  nome: string;
  cargaHoraria: string;
  @Output() nomes: string[] = [];
  @Output() cargasHorarias: string[] = [];

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){
    this.formCurso = this.formBuilder.group({
      nomeCurso: [null],
      cargaCurso: [null]
    }
    )
  }


  adicionarCurso(){
    this.nome = this.formCurso.get('nomeCurso').value;
    this.cargaHoraria = this.formCurso.get('cargaCurso').value;

    this.nomes.push(this.nome);
    this.cargasHorarias.push(this.cargaHoraria);

    console.log(this.nomes)
    console.log(this.cargasHorarias)
  }

}
