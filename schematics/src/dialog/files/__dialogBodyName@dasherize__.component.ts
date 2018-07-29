import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { <%= classify(dialogDataName) %> } from './<%= dasherize(dialogDataName) %>.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '<%= dasherize(prefix) %>-<%= dasherize(dialogBodyName) %>',
  styleUrls: ['./<%= dasherize(dialogBodyName) %>.component.scss'],
  templateUrl: './<%= dasherize(dialogBodyName) %>.component.html'
})
export class <%= classify(dialogBodyName) %>Component {
  constructor(
    private dialogRef: MatDialogRef<<%= classify(dialogBodyName) %>Component>,
    @Inject(MAT_DIALOG_DATA) private data: <%= classify(dialogDataName) %>
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }

  deny() {
    this.dialogRef.close(false);
  }
}
