import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovilPage } from './movil.page';

describe('MovilPage', () => {
  let component: MovilPage;
  let fixture: ComponentFixture<MovilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
