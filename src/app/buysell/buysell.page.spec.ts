import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuysellPage } from './buysell.page';

describe('BuysellPage', () => {
  let component: BuysellPage;
  let fixture: ComponentFixture<BuysellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuysellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuysellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
