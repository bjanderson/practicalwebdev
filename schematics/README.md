# Install

    npm i @practicalwebdev/schematics

# Schematics

## component

    ng generate @practicalwebdev/schematics:component -n <component-name> -p <html-prefix>

### Parameters

|||||
|-|-|-|-|
| --name, -n | string | REQUIRED | The name of the component. |
| --prefix, -p | string | REQUIRED | The html element prefix for your component. |
| --module, -m | boolean | default: true | Create a module for the component. |
| --route, -r | boolean | default: false | Create a routable module for the component. |

### Description

Generate an Angular component.
Places files in `src/app/components`.

Generates the following files

* src/app/components/&lt;component-name&gt;
  * index.ts
  * &lt;component-name&gt;.component.html
  * &lt;component-name&gt;.component.scss
  * &lt;component-name&gt;.component.spec.ts
  * &lt;component-name&gt;.component.ts


If `module` or `route` are set, it also generates a module file at:

`src/app/components/<component-name>/<component-name>.module.ts`


## dialog

    ng generate @practicalwebdev/schematics:dialog  -n <dialog-name> -p <html-prefix>

### Parameters

|||||
|-|-|-|-|
| --name, -n | string | REQUIRED | The name of the dialog. |
| --prefix, -p | string | REQUIRED | The html element prefix for your dialog. |

### Description

Generate an Angular Material dialog component.
Places files in `src/app/components`.

Generates the following files

* src/app/components/&lt;name&gt;-dialog
  * index.ts
  * &lt;name&gt;-dialog-body.component.html
  * &lt;name&gt;-dialog-body.component.scss
  * &lt;name&gt;-dialog-body.component.spec.ts
  * &lt;name&gt;-dialog-body.component.ts
  * &lt;name&gt;-dialog.component.html
  * &lt;name&gt;-dialog.component.scss
  * &lt;name&gt;-dialog.component.spec.ts
  * &lt;name&gt;-dialog.component.ts
  * &lt;name&gt;-dialog.module.ts

## model

    ng generate @practicalwebdev/schematics:model --name <model-name>

### Parameters

|||||
|-|-|-|-|
| --name, -n | string | REQUIRED | The name of the dialog. |

### Description

Generate a model, with unit tests, and automatically add it to the exports from `src/app/models/index.ts`

Creates `src/app/models/index.ts` if it does not already exist.

Places files in `src/app/models`.

Generates the following files

* src/app/models/&lt;model-name&gt;
  * index.ts
  * &lt;model-name&gt;.model.spec.ts
  * &lt;model-name&gt;.model.ts

## service

    ng generate @practicalwebdev/schematics:service --name <service-name>

### Parameters

|||||
|-|-|-|-|
| --name, -n | string | REQUIRED | The name of the dialog. |

### Description

Generate an Angular service, with unit tests, and automatically add it to the exports from `src/app/services/index.ts`

Creates `src/app/services/index.ts` if it does not already exist.

Places files in `src/app/services`.

Generates the following files

* src/app/services/&lt;service-name&gt;
  * index.ts
  * &lt;service-name&gt;.service.spec.ts
  * &lt;service-name&gt;.service.ts

## store

    ng generate @practicalwebdev/schematics:store --name <store-name>

### Parameters

|||||
|-|-|-|-|
| --name, -n | string | REQUIRED | The name of the dialog. |

### Description

Generate an ngrx store, with unit tests, and automatically add it to the exports from `src/app/store/index.ts`

Creates `src/app/store/index.ts` if it does not already exist.

Places files in `src/app/store`.

Generates the following files

* src/app/store/&lt;store-name&gt;
  * index.ts
  * &lt;store-name&gt;.store.spec.ts
  * &lt;store-name&gt;.store.ts
