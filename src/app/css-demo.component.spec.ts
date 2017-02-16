import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CssDemoAppComponent } from '../app/css-demo.component';

beforeEachProviders(() => [CssDemoAppComponent]);

describe('App: CssDemo', () => {
  it('should create the app',
      inject([CssDemoAppComponent], (app: CssDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'css-demo works!\'',
      inject([CssDemoAppComponent], (app: CssDemoAppComponent) => {
    expect(app.title).toEqual('css-demo works!');
  }));
});
