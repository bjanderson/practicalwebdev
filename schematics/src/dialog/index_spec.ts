import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

import { config } from '../utils';

const collectionPath = path.join(__dirname, '../collection.json');

describe('component', () => {

  it('generates the expected files when not given -dialog', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('dialog', {name: 'test'}, Tree.empty());

    expect(tree.files).toEqual([
      `/${config.componentsDir}/test/index.ts`,
      `/${config.componentsDir}/test/test-dialog-body.component.html`,
      `/${config.componentsDir}/test/test-dialog-body.component.scss`,
      `/${config.componentsDir}/test/test-dialog-body.component.spec.ts`,
      `/${config.componentsDir}/test/test-dialog-body.component.ts`,
      `/${config.componentsDir}/test/test-dialog-data.model.spec.ts`,
      `/${config.componentsDir}/test/test-dialog-data.model.ts`,
      `/${config.componentsDir}/test/test-dialog.component.spec.ts`,
      `/${config.componentsDir}/test/test-dialog.component.ts`,
      `/${config.componentsDir}/test/test-dialog.module.ts`
    ]);
  });

  it('generates the expected files when given -dialog', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('dialog', {name: 'test-dialog'}, Tree.empty());

    expect(tree.files).toEqual([
      `/${config.componentsDir}/test/index.ts`,
      `/${config.componentsDir}/test/test-dialog-body.component.html`,
      `/${config.componentsDir}/test/test-dialog-body.component.scss`,
      `/${config.componentsDir}/test/test-dialog-body.component.spec.ts`,
      `/${config.componentsDir}/test/test-dialog-body.component.ts`,
      `/${config.componentsDir}/test/test-dialog-data.model.spec.ts`,
      `/${config.componentsDir}/test/test-dialog-data.model.ts`,
      `/${config.componentsDir}/test/test-dialog.component.spec.ts`,
      `/${config.componentsDir}/test/test-dialog.component.ts`,
      `/${config.componentsDir}/test/test-dialog.module.ts`
    ]);
  });
});
