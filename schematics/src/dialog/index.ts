import {
  Rule,

  apply,
  chain,
  mergeWith,
  move,
  template,
  url,
} from '@angular-devkit/schematics';

import { camelize, capitalize, classify, dasherize } from '@angular-devkit/core/src/utils/strings';

import { config } from '../utils';

const stringUtils = {
  camelize,
  capitalize,
  classify,
  dasherize
};

export function dialog(options: any): Rule {

  try {
    const componentRE = /-?component$/i;
    let name = options.name.replace(componentRE, '').trim();

    const dialogRE = /-?dialog$/i;
    name = options.name.replace(dialogRE, '').trim();

    if (name === '') {
      throw new Error(`Invalid component name: ${options.name}. Name it something other than "Component"`);
    } else {
      options.name = name;
      options.dialogName = name + '-dialog';
      options.dialogBodyName = options.dialogName + '-body';
      options.dialogDataName = options.dialogName + '-data';
    }

  } catch (err) {
    throw new Error(`Invalid component name: ${options.name}`);
  }

  return chain([
    mergeWith(
      apply(
        url('./files'),
        [
          template({
            ...stringUtils,
            ...options
          }),
          move(`${config.componentsDir}/${dasherize(options.dialogName)}`)
        ]
      )),
  ]);
}
