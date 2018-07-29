import { ChangeDetectionStrategy, EventEmitter, Component, Output, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { take } from 'rxjs/operators';

import { <%= classify(dialogBodyName) %>Component } from './<%= dasherize(dialogBodyName) %>.component';
import { <%= classify(dialogDataName) %> } from './<%= dasherize(dialogDataName) %>.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '<%= dasherize(prefix) %>-<%= dasherize(dialogName) %>',
  template: ''
})
export class <%= classify(dialogName) %>Component {
  @Input() config = new MatDialogConfig();
  @Input() data = new <%= classify(dialogDataName) %>();

  @Output() confirmed = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  open(): void {
    this.config.data = this.data;
    const dialogRef = this.dialog.open(<%= classify(dialogBodyName) %>Component, this.config);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((confirmed: boolean) => {
        this.confirmed.emit(confirmed);
      });
  }
}
