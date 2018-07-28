import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { <%= classify(dialogName) %>Component } from './<%= dasherize(dialogName) %>.component';

@NgModule({
  declarations: [ <%= classify(dialogName) %>Component ],

  exports: [ <%= classify(dialogName) %>Component ],

  imports: [
    CommonModule
  ]
})
export class <%= classify(dialogName) %>Module {}
