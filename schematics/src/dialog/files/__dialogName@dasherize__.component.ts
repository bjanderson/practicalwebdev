import { ChangeDetectionStrategy, EventEmitter, Component, Output, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { take } from 'rxjs/operators';

import { <%= classify(dialogBodyName) %>Component } from './<%= dasherize(dialogBodyName) %>.component';
import { <%= classify(dialogDataName) %> } from './<%= dasherize(dialogDataName) %>.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '<%= dasherize(prefix) %>-<%= dasherize(dialogName) %>',
  styleUrls: ['./<%= dasherize(dialogName) %>.component.scss'],
  templateUrl: './<%= dasherize(dialogName) %>.component.html'
})
export class <%= classify(dialogName) %>Component {
  @Input() config = new MatDialogConfig();
  @Input() data = new <%= classify(dialogDataName) %>();
  @Input() showButton = true;

  @Output() confirmed = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  open(): void {
    this.config.autoFocus = true;
    this.config.closeOnNavigation = true;
    this.config.disableClose = false;
    this.config.hasBackdrop = true;
    this.config.panelClass = 'my-dialog';
    this.config.maxHeight = '90vh';
    this.config.width = '50%';
    this.config.maxWidth = '50rem';
    this.config.data = this.data;
    const dialogRef = this.dialog.open(<%= classify(dialogBodyName) %>Component, this.config);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((confirmed: boolean) => {
        this.confirmed.emit(confirmed);
      });
  }
}
