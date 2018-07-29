import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { <%= classify(dialogBodyName) %>Component } from './<%= dasherize(dialogBodyName) %>.component';
import { <%= classify(dialogName) %>Component } from './<%= dasherize(dialogName) %>.component';

@NgModule({
  declarations: [
    <%= classify(dialogName) %>Component,
    <%= classify(dialogBodyName) %>Component
  ],

  entryComponents: [ <%= classify(dialogBodyName) %>Component ],

  exports: [ <%= classify(dialogName) %>Component ],

  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class <%= classify(dialogName) %>Module {}
