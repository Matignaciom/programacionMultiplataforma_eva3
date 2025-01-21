import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvioRegistroPage } from './envio-registro.page';

describe('EnvioRegistroPage', () => {
  let component: EnvioRegistroPage;
  let fixture: ComponentFixture<EnvioRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
