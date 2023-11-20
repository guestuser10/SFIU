import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiertoDialogComponent } from './abierto-dialog.component';

describe('AbiertoDialogComponent', () => {
  let component: AbiertoDialogComponent;
  let fixture: ComponentFixture<AbiertoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbiertoDialogComponent]
    });
    fixture = TestBed.createComponent(AbiertoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
