import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaMiembroComponentComponent } from './busqueda-miembro-component.component';

describe('BusquedaMiembroComponentComponent', () => {
  let component: BusquedaMiembroComponentComponent;
  let fixture: ComponentFixture<BusquedaMiembroComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaMiembroComponentComponent]
    });
    fixture = TestBed.createComponent(BusquedaMiembroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
