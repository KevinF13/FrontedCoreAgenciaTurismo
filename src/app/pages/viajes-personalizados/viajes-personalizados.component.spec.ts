import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesPersonalizadosComponent } from './viajes-personalizados.component';

describe('ViajesPersonalizadosComponent', () => {
  let component: ViajesPersonalizadosComponent;
  let fixture: ComponentFixture<ViajesPersonalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesPersonalizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
