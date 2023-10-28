import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneNavComponent } from './standalone-nav.component';

describe('StandaloneNavComponent', () => {
  let component: StandaloneNavComponent;
  let fixture: ComponentFixture<StandaloneNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandaloneNavComponent]
    });
    fixture = TestBed.createComponent(StandaloneNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
