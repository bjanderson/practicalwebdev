import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { TestDialogBodyComponent } from './test-dialog-body.component';
import { TestDialogComponent } from './test-dialog.component';

@NgModule({
  declarations: [
    TestDialogComponent,
    TestDialogBodyComponent
  ],

  entryComponents: [ TestDialogBodyComponent ],

  exports: [ TestDialogComponent ],

  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class TestDialogModule {}
