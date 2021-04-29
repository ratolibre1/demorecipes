import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepCardComponent } from './step-card.component';

describe('StepCardComponent', () => {
  let component: StepCardComponent;
  let fixture: ComponentFixture<StepCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should show fixed texts', () => {

    const expected = {
      number: '1',
      detail: 'Poner en un recipiente la crema de leche.'
    };

    const actual = {
      number: fixture.debugElement.nativeElement.querySelector('#step-number').innerHTML,
      detail: fixture.debugElement.nativeElement.querySelector('#step-detail').innerHTML
    };

    expect(actual.number).toEqual(expected.number);
    expect(actual.detail).toEqual(expected.detail);
  });
});
