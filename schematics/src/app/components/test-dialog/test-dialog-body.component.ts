import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TestDialogData } from './test-dialog-data.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test-dialog-body',
  styleUrls: ['./test-dialog-body.component.scss'],
  templateUrl: './test-dialog-body.component.html'
})
export class TestDialogBodyComponent {
  constructor(
    private dialogRef: MatDialogRef<TestDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) private data: TestDialogData
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }

  deny() {
    this.dialogRef.close(false);
  }
}
