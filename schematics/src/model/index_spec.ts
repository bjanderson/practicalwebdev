import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

import { config } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');

describe('model', () => {
  it('generates the expected model files', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('model', {name: 'test-model'}, Tree.empty());

    expect(tree.files).toEqual([
      `/${config.modelsDir}/index.ts`,
      `/${config.modelsDir}/test/index.ts`,
      `/${config.modelsDir}/test/test.model.spec.ts`,
      `/${config.modelsDir}/test/test.model.ts`
    ]);
  });
});
