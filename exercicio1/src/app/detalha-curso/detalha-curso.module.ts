import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhaCursoComponent } from './detalha-curso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetalhaCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [DetalhaCursoComponent],
})
export class DetalhaCursoModule { }
