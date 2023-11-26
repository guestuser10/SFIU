import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProblemaDialogComponent } from './add-problema-dialog.component';

describe('AddProblemaDialogComponent', () => {
  let component: AddProblemaDialogComponent;
  let fixture: ComponentFixture<AddProblemaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProblemaDialogComponent]
    });
    fixture = TestBed.createComponent(AddProblemaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
