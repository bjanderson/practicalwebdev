import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '<%= dasherize(prefix) %>-<%= dasherize(dialogName) %>',
  styleUrls: ['./<%= dasherize(dialogName) %>.component.scss'],
  templateUrl: './<%= dasherize(dialogName) %>.component.html'
})
export class <%= classify(dialogName) %>Component {
  constructor() {}
}
