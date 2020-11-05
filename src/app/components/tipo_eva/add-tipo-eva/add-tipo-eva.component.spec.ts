import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoEvaComponent } from './add-tipo-eva.component';

describe('AddTipoEvaComponent', () => {
  let component: AddTipoEvaComponent;
  let fixture: ComponentFixture<AddTipoEvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoEvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoEvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
