import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrupoDialogComponent } from './add-grupo-dialog.component';

describe('AddGrupoDialogComponent', () => {
  let component: AddGrupoDialogComponent;
  let fixture: ComponentFixture<AddGrupoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGrupoDialogComponent]
    });
    fixture = TestBed.createComponent(AddGrupoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
