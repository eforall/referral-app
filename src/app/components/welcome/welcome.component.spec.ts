/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent
      ],
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(WelcomeComponent);
    let cmp = fixture.debugElement.componentInstance;
    expect(cmp).toBeTruthy();
  }));

});
