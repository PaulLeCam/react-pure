import * as PureImport from '../src/index';
const PureRequire = require('../src/index');

describe('lib', () => {
  it('exposes the `Button`, `Cell`, `Menu`, `MenuItem` and `Table` components as named imports', () => {
    expect(PureImport.Button).toBeDefined();
    expect(PureImport.Cell).toBeDefined();
    expect(PureImport.Menu).toBeDefined();
    expect(PureImport.MenuItem).toBeDefined();
    expect(PureImport.Table).toBeDefined();
  });

  it('exposes the `Button`, `Cell`, `Menu`, `MenuItem` and `Table` components as default require', () => {
    expect(PureRequire.Button).toBeDefined();
    expect(PureRequire.Cell).toBeDefined();
    expect(PureRequire.Menu).toBeDefined();
    expect(PureRequire.MenuItem).toBeDefined();
    expect(PureRequire.Table).toBeDefined();
  });
});
