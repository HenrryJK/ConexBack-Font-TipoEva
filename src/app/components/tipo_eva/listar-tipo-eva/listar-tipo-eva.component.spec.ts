import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoEvaComponent } from './listar-tipo-eva.component';

describe('ListarTipoEvaComponent', () => {
  let component: ListarTipoEvaComponent;
  let fixture: ComponentFixture<ListarTipoEvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoEvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoEvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
