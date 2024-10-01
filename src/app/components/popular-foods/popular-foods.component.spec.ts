import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularFoodsComponent } from './popular-foods.component';

describe('PopularFoodsComponent', () => {
  let component: PopularFoodsComponent;
  let fixture: ComponentFixture<PopularFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularFoodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
