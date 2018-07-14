import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

import { config } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');

describe('service', () => {
  it('generates the expected service files', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('service', {name: 'test-service'}, Tree.empty());

    expect(tree.files).toEqual([
      // `/${config.servicesDir}/index.ts`,
      `/${config.servicesDir}/test/index.ts`,
      `/${config.servicesDir}/test/test.service.spec.ts`,
      `/${config.servicesDir}/test/test.service.ts`
    ]);
  });
});
