import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAgotadosComponent } from './productos-agotados.component';

describe('ProductosAgotadosComponent', () => {
  let component: ProductosAgotadosComponent;
  let fixture: ComponentFixture<ProductosAgotadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosAgotadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAgotadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
