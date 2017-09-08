import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MGeneratorComponent} from './m-generator.component';

describe('MGeneratorComponent', () => {
  let component: MGeneratorComponent;
  let fixture: ComponentFixture<MGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MGeneratorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
