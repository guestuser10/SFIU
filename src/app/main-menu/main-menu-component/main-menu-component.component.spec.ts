import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponentComponent } from './main-menu-component.component';

describe('MainMenuComponentComponent', () => {
  let component: MainMenuComponentComponent;
  let fixture: ComponentFixture<MainMenuComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuComponentComponent]
    });
    fixture = TestBed.createComponent(MainMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
