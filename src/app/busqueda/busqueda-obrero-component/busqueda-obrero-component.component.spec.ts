import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaObreroComponentComponent } from './busqueda-obrero-component.component';

describe('BusquedaObreroComponentComponent', () => {
  let component: BusquedaObreroComponentComponent;
  let fixture: ComponentFixture<BusquedaObreroComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaObreroComponentComponent]
    });
    fixture = TestBed.createComponent(BusquedaObreroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
