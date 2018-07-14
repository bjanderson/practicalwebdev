import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { <%= classify(name) %>Effects } from './<%= dasherize(name) %>.store.effects';
import { <%= camelize(name) %>Reducer } from './<%= dasherize(name) %>.store.reducers';
import { <%= classify(name) %>StoreService } from './<%= dasherize(name) %>.store.service';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature('<%= camelize(name) %>s', <%= camelize(name) %>Reducer),
    EffectsModule.forFeature([<%= classify(name) %>Effects])
  ],

  providers: [
    <%= classify(name) %>StoreService
  ]
})
export class <%= classify(name) %>StoreModule {}
