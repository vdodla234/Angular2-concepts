import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovierentComponent } from './movierent.component';

describe('MovierentComponent', () => {
  let component: MovierentComponent;
  let fixture: ComponentFixture<MovierentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovierentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovierentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
