import {
  Rule,

  apply,
  chain,
  filter,
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

export function component(options: any): Rule {

  try {
    const re = /-?component$/i;
    const name = options.name.replace(re, '').trim();

    if (name === '') {
      throw new Error(`Invalid component name: ${options.name}. Name it something other than "Component"`);
    } else {
      options.name = name;
    }

  } catch (err) {
    throw new Error(`Invalid component name: ${options.name}`);
  }

  return chain([

    // TODO: if module or route also apply to ./optionalFiles
    mergeWith(
      apply(
        url('./optionalFiles'),
        [
          filter(() => options.module || options.route),
          template({
            ...stringUtils,
            ...options
          }),
          move(`${config.componentsDir}/${dasherize(options.name)}`)
        ]
      )),

    mergeWith(
      apply(
        url('./files'),
        [
          template({
            ...stringUtils,
            ...options
          }),
          move(`${config.componentsDir}/${dasherize(options.name)}`)
        ]
      )),
  ]);
}
