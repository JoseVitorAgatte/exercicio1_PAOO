import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Curso } from '../classes/Curso';

@Component({
  selector: 'app-detalha-curso',
  templateUrl: './detalha-curso.component.html',
  styleUrls: ['./detalha-curso.component.css']
})
export class DetalhaCursoComponent implements OnInit {

  public form: FormGroup;
  public curso: Curso;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){
    this.form = this.formBuilder.group({
      nomeCurso: [null],
      cargaCurso: [null]
    }
    )
  }


  adicionarCurso(){
    let curso = new Curso();
    curso.nome = this.form.get('nomeCurso').value;
    curso.cargaHoraria = this.form.get('cargaCurso').value;
  }

}
