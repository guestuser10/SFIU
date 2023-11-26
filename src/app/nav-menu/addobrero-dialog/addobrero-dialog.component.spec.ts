import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddobreroDialogComponent } from './addobrero-dialog.component';

describe('AddobreroDialogComponent', () => {
  let component: AddobreroDialogComponent;
  let fixture: ComponentFixture<AddobreroDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddobreroDialogComponent]
    });
    fixture = TestBed.createComponent(AddobreroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
