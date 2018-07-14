import {
  Rule,

  apply,
  chain,
  mergeWith,
  move,
  template,
  url,
} from '@angular-devkit/schematics';

import { camelize, capitalize, classify, dasherize, underscore } from '@angular-devkit/core/src/utils/strings';

import { allcapsify, config, titleify } from '../utils';

const stringUtils = {
  allcapsify,
  camelize,
  capitalize,
  classify,
  dasherize,
  titleify,
  underscore
};

export function store(options: any): Rule {
  try {
    const re = /-?store$/i;
    const name = options.name.replace(re, '').trim();

    if (name === '') {
      throw new Error(`Invalid store name: ${options.name}. Name it something other than "Store"`);
    } else {
      options.name = name;
    }

  } catch (err) {
    throw new Error(`Invalid store name: ${options.name}`);
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
          move(`${config.storeDir}/${dasherize(options.name)}`)
        ]
      )),
  ]);
}
