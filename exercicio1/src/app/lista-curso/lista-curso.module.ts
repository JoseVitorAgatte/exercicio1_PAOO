import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursoComponent } from './lista-curso.component';



@NgModule({
  declarations: [
    ListaCursoComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ListaCursoComponent]
})
export class ListaCursoModule { }
