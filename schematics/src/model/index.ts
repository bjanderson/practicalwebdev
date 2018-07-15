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

import { config, exportFromFile } from '../utils';

const stringUtils = {
  classify,
  dasherize
};

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
      const filePath = `${config.modelsDir}/index.ts`;
      exportFromFile(filePath, tree, options);
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
