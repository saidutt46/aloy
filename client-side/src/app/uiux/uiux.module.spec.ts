import { UiuxModule } from './uiux.module';

describe('UiuxModule', () => {
  let uiuxModule: UiuxModule;

  beforeEach(() => {
    uiuxModule = new UiuxModule();
  });

  it('should create an instance', () => {
    expect(uiuxModule).toBeTruthy();
  });
});
