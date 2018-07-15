# Install

    npm i @practicalwebdev/schematics

# Schematics

## component

Generate an Angular component.
Places files in `src/app/components`.

Generates the following files

<ul><li>src/app/components/&lt;component-name&gt;
  <ul>
    <li>index.ts</li>
    <li>&lt;component-name&gt;.component.html</li>
    <li>&lt;component-name&gt;.component.scss</li>
    <li>&lt;component-name&gt;.component.spec.ts</li>
    <li>&lt;component-name&gt;.component.ts</li>
  </ul>
</ul></li>

If `module` or `route` are set, it also generates a module file at:

`src/app/components/&lt;component-name&gt;/&lt;component-name&gt;.module.ts`

### Parameters

<table>

  <tr>
    <td>--name, -n</td>
    <td>string</td>
    <td>REQUIRED</td>
    <td>The name of the component.</td>
  </tr>

  <tr>
    <td>--module, -m</td>
    <td>boolean</td>
    <td>default: false</td>
    <td>Create a module for the component.</td>
  </tr>

  <tr>
    <td>--prefix, -p</td>
    <td>string</td>
    <td>default: 'app'</td>
    <td>The html element prefix for your component.</td>
  </tr>

  <tr>
    <td>--route, -r</td>
    <td>boolean</td>
    <td>default: false</td>
    <td>Create a routable module for the component.</td>
  </tr>
<table>

### Example
    ng generate @practicalwebdev/schematics:component --name <component-name> -r

## model

Generate a model, with unit tests, and automatically add it to the exports from `src/app/models/index.ts`

Creates `src/app/models/index.ts` if it does not already exist.

Places files in `src/app/models`.

Generates the following files

<ul><li>src/app/models/&lt;model-name&gt;
  <ul>
    <li>index.ts</li>
    <li>&lt;model-name&gt;.model.spec.ts</li>
    <li>&lt;model-name&gt;.model.ts</li>
  </ul>
</ul></li>

### Parameters

<table>

  <tr>
    <td>--name, -n</td>
    <td>string</td>
    <td>REQUIRED</td>
    <td>The name of the model.</td>
  </tr>
<table>

### Example
    ng generate @practicalwebdev/schematics:model --name <model-name>

## service

Generate an Angular service, with unit tests, and automatically add it to the exports from `src/app/services/index.ts`

Creates `src/app/services/index.ts` if it does not already exist.

Places files in `src/app/services`.

Generates the following files

<ul><li>src/app/services/&lt;service-name&gt;
  <ul>
    <li>index.ts</li>
    <li>&lt;service-name&gt;.service.spec.ts</li>
    <li>&lt;service-name&gt;.service.ts</li>
  </ul>
</ul></li>

### Parameters

<table>

  <tr>
    <td>--name, -n</td>
    <td>string</td>
    <td>REQUIRED</td>
    <td>The name of the service.</td>
  </tr>
<table>

### Example
    ng generate @practicalwebdev/schematics:service --name <service-name>

## store

Generate an ngrx store, with unit tests, and automatically add it to the exports from `src/app/store/index.ts`

Creates `src/app/store/index.ts` if it does not already exist.

Places files in `src/app/store`.

Generates the following files

<ul><li>src/app/store/&lt;store-name&gt;
  <ul>
    <li>index.ts</li>
    <li>&lt;store-name&gt;.store.spec.ts</li>
    <li>&lt;store-name&gt;.store.ts</li>
  </ul>
</ul></li>

### Parameters

<table>

  <tr>
    <td>--name, -n</td>
    <td>string</td>
    <td>REQUIRED</td>
    <td>The name of the store.</td>
  </tr>
<table>

### Example
    ng generate @practicalwebdev/schematics:store --name <store-name>
