import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaActividadesComponent } from './busqueda-actividades.component';

describe('BusquedaActividadesComponent', () => {
  let component: BusquedaActividadesComponent;
  let fixture: ComponentFixture<BusquedaActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
