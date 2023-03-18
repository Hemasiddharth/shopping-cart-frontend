import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdealComponent } from './bestdeal.component';

describe('BestdealComponent', () => {
  let component: BestdealComponent;
  let fixture: ComponentFixture<BestdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestdealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
