import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpleadosComponent } from './listar-empleados.component';

describe('ListarEmpleadosComponent', () => {
  let component: ListarEmpleadosComponent;
  let fixture: ComponentFixture<ListarEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEmpleadosComponent]
    });
    fixture = TestBed.createComponent(ListarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
