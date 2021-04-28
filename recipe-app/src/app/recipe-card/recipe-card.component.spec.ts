import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from 'protractor';

import { RecipeCardComponent } from './recipe-card.component';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit ('should show fixed texts', () => {
    const expected = {
      name: 'Fideos con Salsa',
      time: '30 min.',
      people: '4 personas',
      difficulty: '2/4 Medio',
      desc: 'Sabrosa receta para comer en familia.'
    };

    fixture.detectChanges();

    const actual = {
      name: fixture.debugElement.nativeElement.querySelector('#recipe-name').innerHTML,
      time: fixture.debugElement.nativeElement.querySelector('#text-time').innerHTML,
      people: fixture.debugElement.nativeElement.querySelector('#text-people').innerHTML,
      difficulty: fixture.debugElement.nativeElement.querySelector('#text-difficulty').innerHTML,
      desc: fixture.debugElement.nativeElement.querySelector('#recipe-desc').innerHTML
    };

    console.log('LOGGING', fixture.debugElement.nativeElement.querySelector('#recipe-name').innerHTML, expected.name, actual.name);

    expect(actual.name).toEqual(expected.name);
    expect(actual.time).toEqual(expected.time);
    expect(actual.people).toEqual(expected.people);
    expect(actual.difficulty).toEqual(expected.difficulty);
    expect(actual.desc).toEqual(expected.desc);
  });
});
