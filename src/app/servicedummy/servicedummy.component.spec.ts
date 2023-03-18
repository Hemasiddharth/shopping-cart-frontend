import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedummyComponent } from './servicedummy.component';

describe('ServicedummyComponent', () => {
  let component: ServicedummyComponent;
  let fixture: ComponentFixture<ServicedummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicedummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicedummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
