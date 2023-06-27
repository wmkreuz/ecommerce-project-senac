import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoDetalheComponent } from './carrinho-detalhe.component';

describe('CarrinhoDetalheComponent', () => {
  let component: CarrinhoDetalheComponent;
  let fixture: ComponentFixture<CarrinhoDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinhoDetalheComponent]
    });
    fixture = TestBed.createComponent(CarrinhoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
