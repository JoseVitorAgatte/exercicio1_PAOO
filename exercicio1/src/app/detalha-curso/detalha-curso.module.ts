import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhaCursoComponent } from './detalha-curso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaCursoModule } from '../lista-curso/lista-curso.module';



@NgModule({
  declarations: [DetalhaCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListaCursoModule
  ],
  providers: [],
  bootstrap: [DetalhaCursoComponent],
  exports: [DetalhaCursoComponent]
})
export class DetalhaCursoModule { }
