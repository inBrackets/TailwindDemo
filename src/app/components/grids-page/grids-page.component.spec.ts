import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsPageComponent } from './grids-page.component';

describe('GridsPageComponent', () => {
  let component: GridsPageComponent;
  let fixture: ComponentFixture<GridsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
