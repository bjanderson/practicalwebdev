import {
  Rule,
  Tree,

  apply,
  chain,
  mergeWith,
  move,
  template,
  url,
} from '@angular-devkit/schematics';

import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';

const stringUtils = {
  classify,
  dasherize
};

function parseExports(modelsIndex: string): string[] {
  let lines = modelsIndex.trim().split('\n');
  let names = [];
  for (let line of lines) {
    names.push(line.split('./')[1].replace(/';/g, '').trim());
  }
  return names;
}

function addToModelsIndex(modelsIndex: string, name: string): string {
  let names = parseExports(modelsIndex);
  if (names.indexOf(name) === -1) {
    names.push(name);
  }
  names.sort(function (a, b) { return a.localeCompare(b); });

  let contents = '';
  for (let n of names) {
    contents += `export * from './${n}';\n`;
  }

  return contents;
}

function exportFromModelsIndex(tree: Tree, options: any) {
  const idx = tree.read('src/app/models/index.ts');

  if (idx == null) {
    tree.create('src/app/models/index.ts', `export * from './${dasherize(options.name)}';\n`);
  } else {
    const contents = addToModelsIndex(idx.toString(), dasherize(options.name));
    tree.overwrite('src/app/models/index.ts', contents);
  }
}

export function model(options: any): Rule {
  return chain([

    (tree: Tree) => {
      exportFromModelsIndex(tree, options);
    },

    mergeWith(
      apply(
        url('./files'),
        [
          template({
            ...stringUtils,
            ...options
          }),
          move(`src/app/models/${dasherize(options.name)}`)
        ]
      )),
  ]);
}
