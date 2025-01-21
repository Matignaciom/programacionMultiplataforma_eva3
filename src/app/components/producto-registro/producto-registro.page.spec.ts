import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoRegistroPage } from './producto-registro.page';

describe('ProductoRegistroPage', () => {
  let component: ProductoRegistroPage;
  let fixture: ComponentFixture<ProductoRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
