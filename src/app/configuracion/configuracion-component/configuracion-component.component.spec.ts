import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionComponentComponent } from './configuracion-component.component';

describe('ConfiguracionComponentComponent', () => {
  let component: ConfiguracionComponentComponent;
  let fixture: ComponentFixture<ConfiguracionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionComponentComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
