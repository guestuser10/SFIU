import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResueltoDialogComponent } from './resuelto-dialog.component';

describe('ResueltoDialogComponent', () => {
  let component: ResueltoDialogComponent;
  let fixture: ComponentFixture<ResueltoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResueltoDialogComponent]
    });
    fixture = TestBed.createComponent(ResueltoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
