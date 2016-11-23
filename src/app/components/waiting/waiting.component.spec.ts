/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WaitingComponent } from './waiting.component';

describe('WaitingComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WaitingComponent
      ],
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(WaitingComponent);
    let cmp = fixture.debugElement.componentInstance;
    expect(cmp).toBeTruthy();
  }));

});
