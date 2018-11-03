import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

import { <%= classify(dialogBodyName) %>Component } from './<%= dasherize(dialogBodyName) %>.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '<%= dasherize(prefix) %>-<%= dasherize(dialogName) %>',
  styleUrls: ['./<%= dasherize(dialogName) %>.component.scss'],
  templateUrl: './<%= dasherize(dialogName) %>.component.html'
})
export class <%= classify(dialogName) %>Component {
  @Input() showButton = true;

  dialogRef: MatDialogRef<<%= classify(dialogBodyName) %>>;

  constructor(
    private dialog: MatDialog
  ) {}

  open(): void {
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.closeOnNavigation = true;
    config.disableClose = false;
    config.hasBackdrop = true;
    config.panelClass = 'standard-dialog';
    config.maxHeight = '90vh';
    config.width = '50%';
    config.maxWidth = '50rem';
    config.data = { parent: this };
    dialogRef = this.dialog.open(<%= classify(dialogBodyName) %>Component, config);
  }
}
