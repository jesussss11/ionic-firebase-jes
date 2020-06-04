import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerifericoPage } from './periferico.page';

describe('PerifericoPage', () => {
  let component: PerifericoPage;
  let fixture: ComponentFixture<PerifericoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerifericoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerifericoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
