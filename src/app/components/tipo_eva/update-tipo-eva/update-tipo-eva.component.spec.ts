import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTipoEvaComponent } from './update-tipo-eva.component';

describe('UpdateTipoEvaComponent', () => {
  let component: UpdateTipoEvaComponent;
  let fixture: ComponentFixture<UpdateTipoEvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTipoEvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTipoEvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
