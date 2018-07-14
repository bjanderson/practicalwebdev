import {
  Rule,

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

export function service(options: any): Rule {
  try {
    const re = /-?service$/i;
    const name = options.name.replace(re, '').trim();

    if (name === '') {
      throw new Error(`Invalid service name: ${options.name}. Name it something other than "Service"`);
    } else {
      options.name = name;
    }

  } catch (err) {
    throw new Error(`Invalid service name: ${options.name}`);
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
          move(`${config.servicesDir}/${dasherize(options.name)}`)
        ]
      )),
  ]);
}
