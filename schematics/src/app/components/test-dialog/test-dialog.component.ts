import { ChangeDetectionStrategy, EventEmitter, Component, Output, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { take } from 'rxjs/operators';

import { TestDialogBodyComponent } from './test-dialog-body.component';
import { TestDialogData } from './test-dialog-data.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test-dialog',
  template: ''
})
export class TestDialogComponent {
  @Input() config = new MatDialogConfig();
  @Input() data = new TestDialogData();

  @Output() confirmed = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  open(): void {
    this.config.data = this.data;
    const dialogRef = this.dialog.open(TestDialogBodyComponent, this.config);

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((confirmed: boolean) => {
        this.confirmed.emit(confirmed);
      });
  }
}
