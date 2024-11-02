import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursPageComponent } from './colours-page.component';

describe('ColoursPageComponent', () => {
  let component: ColoursPageComponent;
  let fixture: ComponentFixture<ColoursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoursPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
