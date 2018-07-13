import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('model', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('model', {name: 'test-model'}, Tree.empty());

    expect(tree.files).toEqual([
      '/src/app/models/index.ts',
      '/src/app/models/test-model/index.ts',
      '/src/app/models/test-model/test-model.model.spec.ts',
      '/src/app/models/test-model/test-model.model.ts'
    ]);
  });
});
