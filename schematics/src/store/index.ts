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

import {
  camelize,
  capitalize,
  classify,
  dasherize,
  underscore
} from '@angular-devkit/core/src/utils/strings';

import {
  allcapsify,
  config,
  titleify,
  warningMessage
} from '../utils';

const stringUtils = {
  allcapsify,
  camelize,
  capitalize,
  classify,
  dasherize,
  titleify,
  underscore
};

function createIndexFile(options: any) {
  const text = `${warningMessage}export * from './${dasherize(options.name)}';

import { ${classify(options.name)}StoreModule } from './${dasherize(options.name)}';

export const STORE_MODULES = [
  ${classify(options.name)}StoreModule
];
`;
  return text;
}

function exportFromStoreIndex(filePath: string, tree: Tree, options: any): void {
  const fileContents = tree.read(filePath);

  if (fileContents == null) {
    tree.create(filePath, createIndexFile(options));
  } else {
    const updatedFileContents = getUpdatedFileContents(fileContents.toString(), dasherize(options.name));
    tree.overwrite(filePath, updatedFileContents);
  }
}

function getUpdatedFileContents(fileContents: string, name: string): string {
  const lines = fileContents.split('\n');
  const exports = getExports(lines, name);
  const imports = getImports(lines, name);

  let updatedFileContents = `${warningMessage}`;

  for (const exp of exports) {
    updatedFileContents += `export * from './${exp}';\n`;
  }

  updatedFileContents += '\n';

  for (const imp of imports) {
    updatedFileContents += `import { ${classify(imp)}StoreModule } from './${imp}';\n`;
  }

  updatedFileContents += '\nexport const STORE_MODULES = [\n';

  for (const imp of imports) {
    updatedFileContents += `  ${classify(imp)}StoreModule,\n`;
  }

  updatedFileContents += '];\n';

  return updatedFileContents;
}

function getExports(lines: string[], name: string): string[] {
  let exports = lines
    .filter(l => l.includes('export') && l.includes('from'))
    .map(l => l
      .replace(/[\s\S]*['"]\.\//, '')
      .replace(/['"];?[\s]*$/, ''));

  if (exports.indexOf(name) === -1) {
    exports.push(name);
  }

  exports.sort((a: string, b: string) => a.localeCompare(b));

  return exports;
}

function getImports(lines: string[], name: string): string[] {
  let imports = lines
    .filter(l => l.includes('import') && l.includes('from'))
    .map(l => l
      .replace(/[\s\S]*['"]\.\//, '')
      .replace(/['"];?[\s]*$/, ''));

  if (imports.indexOf(name) === -1) {
    imports.push(name);
  }

  imports.sort((a: string, b: string) => a.localeCompare(b));

  return imports;
}

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

    (tree: Tree) => {
      const file = `${config.storeDir}/index.ts`;
      exportFromStoreIndex(file, tree, options);
    },

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
