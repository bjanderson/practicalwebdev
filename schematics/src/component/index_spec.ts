import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

import { config } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');

describe('component', () => {
  it('generates the expected component files', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('component', {name: 'test-component'}, Tree.empty());

    expect(tree.files).toEqual([
      `/${config.componentsDir}/test/index.ts`,
      `/${config.componentsDir}/test/test.component.html`,
      `/${config.componentsDir}/test/test.component.scss`,
      `/${config.componentsDir}/test/test.component.spec.ts`,
      `/${config.componentsDir}/test/test.component.ts`
    ]);
  });

  it('generates the module file when module is true', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('component', {name: 'test-component', module: true}, Tree.empty());

    expect(tree.files).toEqual([
      `/${config.componentsDir}/test/test.module.ts`,
      `/${config.componentsDir}/test/index.ts`,
      `/${config.componentsDir}/test/test.component.html`,
      `/${config.componentsDir}/test/test.component.scss`,
      `/${config.componentsDir}/test/test.component.spec.ts`,
      `/${config.componentsDir}/test/test.component.ts`
    ]);
  });

  it('generates the module file when route is true', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('component', {name: 'test-component', route: true}, Tree.empty());

    expect(tree.files).toEqual([
      `/${config.componentsDir}/test/test.module.ts`,
      `/${config.componentsDir}/test/index.ts`,
      `/${config.componentsDir}/test/test.component.html`,
      `/${config.componentsDir}/test/test.component.scss`,
      `/${config.componentsDir}/test/test.component.spec.ts`,
      `/${config.componentsDir}/test/test.component.ts`
    ]);
  });
});
