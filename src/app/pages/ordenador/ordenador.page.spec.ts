import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdenadorPage } from './ordenador.page';

describe('OrdenadorPage', () => {
  let component: OrdenadorPage;
  let fixture: ComponentFixture<OrdenadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdenadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
