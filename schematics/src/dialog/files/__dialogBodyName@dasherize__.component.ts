import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '<%= dasherize(prefix) %>-<%= dasherize(dialogBodyName) %>',
  styleUrls: ['./<%= dasherize(dialogBodyName) %>.component.scss'],
  templateUrl: './<%= dasherize(dialogBodyName) %>.component.html'
})
export class <%= classify(dialogBodyName) %>Component {
  constructor() {}
}
