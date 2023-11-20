import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaComponentComponent } from './problema-component.component';

describe('ProblemaComponentComponent', () => {
  let component: ProblemaComponentComponent;
  let fixture: ComponentFixture<ProblemaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemaComponentComponent]
    });
    fixture = TestBed.createComponent(ProblemaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
