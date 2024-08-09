import { refreshPage } from './window';

describe("refreshPage", () => {
  beforeEach(() => {
    // Mock de window.location.reload
    Object.defineProperty(window, 'location', {
      value: {
        reload: jest.fn(),
      },
      writable: true
    });
  });

  it("devrait appeler window.location.reload", () => {
    refreshPage();
    expect(window.location.reload).toHaveBeenCalled();
  });

  afterEach(() => {
    // Nettoyer le mock après chaque test
    jest.resetAllMocks();
  });
});