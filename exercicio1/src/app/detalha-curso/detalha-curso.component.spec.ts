import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaCursoComponent } from './detalha-curso.component';

describe('DetalhaCursoComponent', () => {
  let component: DetalhaCursoComponent;
  let fixture: ComponentFixture<DetalhaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
