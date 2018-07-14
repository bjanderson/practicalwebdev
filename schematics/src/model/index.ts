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

import { config } from '../utils';

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
  const modelsIndex = `${config.modelsDir}/index.ts`;
  const idx = tree.read(modelsIndex);

  if (idx == null) {
    tree.create(modelsIndex, `export * from './${dasherize(options.name)}';\n`);
  } else {
    const contents = addToModelsIndex(idx.toString(), dasherize(options.name));
    tree.overwrite(modelsIndex, contents);
  }
}

export function model(options: any): Rule {
  try {
    const re = /-?model$/i;
    const name = options.name.replace(re, '').trim();

    if (name === '') {
      throw new Error(`Invalid model name: ${options.name}. Name it something other than "Model"`);
    } else {
      options.name = name;
    }

  } catch (err) {
    throw new Error(`Invalid model name: ${options.name}`);
  }

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
          move(`${config.modelsDir}/${dasherize(options.name)}`)
        ]
      )),
  ]);
}
