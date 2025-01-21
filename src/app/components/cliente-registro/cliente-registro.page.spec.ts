import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteRegistroPage } from './cliente-registro.page';

describe('ClienteRegistroPage', () => {
  let component: ClienteRegistroPage;
  let fixture: ComponentFixture<ClienteRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
