/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { OpenComponent } from './open.component';

describe('OpenComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OpenComponent
      ],
    });
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(OpenComponent);
    let cmp = fixture.debugElement.componentInstance;
    expect(cmp).toBeTruthy();
  }));

});
