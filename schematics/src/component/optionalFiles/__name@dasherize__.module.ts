import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<% if (route) { %>import { RouterModule, Routes } from '@angular/router';
<% } %>
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
<% if (route) { %>
export const routes: Routes = [{
  path: '',
  component: <%= classify(name) %>Component
}];
<% } %>
@NgModule({
  declarations: [ <%= classify(name) %>Component ],

  exports: [ <%= classify(name) %>Component ],

  imports: [
    CommonModule<% if (route) { %>,
    RouterModule.forChild(routes)<% } %>
  ]
})
export class <%= classify(name) %>Module {}
