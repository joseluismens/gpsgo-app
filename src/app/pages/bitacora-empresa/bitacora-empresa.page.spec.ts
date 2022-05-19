import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BitacoraEmpresaPage } from './bitacora-empresa.page';

describe('BitacoraEmpresaPage', () => {
  let component: BitacoraEmpresaPage;
  let fixture: ComponentFixture<BitacoraEmpresaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoraEmpresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BitacoraEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
