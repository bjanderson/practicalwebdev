import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '<%= dasherize(prefix) %>-<%= dasherize(dialogBodyName) %>',
  styleUrls: ['./<%= dasherize(dialogBodyName) %>.component.scss'],
  templateUrl: './<%= dasherize(dialogBodyName) %>.component.html'
})
export class <%= classify(dialogBodyName) %>Component {

  parent: <%= classify(dialogName) %>;

  constructor(
    private dialogRef: MatDialogRef<<%= classify(dialogBodyName) %>Component>,
    @Inject(MAT_DIALOG_DATA) private data: { parent: <%= classify(dialogName) %>}
  ) {
    this.parent = data.parent;
  }

  close() {
    this.dialogRef.close();
  }
}
