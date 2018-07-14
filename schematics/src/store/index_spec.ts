import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

import { config } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');

describe('store', () => {
  it('generates the expected store files', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('store', {name: 'test-store'}, Tree.empty());

    expect(tree.files).toEqual([
      // `/${config.storeDir}/index.ts`,
      `/${config.storeDir}/test/index.ts`,
      `/${config.storeDir}/test/test.store.actions.spec.ts`,
      `/${config.storeDir}/test/test.store.actions.ts`,
      `/${config.storeDir}/test/test.store.effects.spec.ts`,
      `/${config.storeDir}/test/test.store.effects.ts`,
      `/${config.storeDir}/test/test.store.module.ts`,
      `/${config.storeDir}/test/test.store.reducers.spec.ts`,
      `/${config.storeDir}/test/test.store.reducers.ts`,
      `/${config.storeDir}/test/test.store.service.spec.ts`,
      `/${config.storeDir}/test/test.store.service.ts`
    ]);
  });
});
