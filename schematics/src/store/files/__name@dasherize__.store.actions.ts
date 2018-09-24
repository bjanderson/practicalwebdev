import { PayloadAction } from '@practicalwebdev/utils';

export const <%= classify(name) %>ActionTypes = {
  LOAD: '[<%= titleify(name) %>] Load',
  LOAD_FAIL: '[<%= titleify(name) %>] Load Fail',
  LOAD_SUCCESS: '[<%= titleify(name) %>] Load Success',
};

export class LoadAction extends PayloadAction {
  constructor () { super(<%= classify(name) %>ActionTypes.LOAD); }
}

export class LoadFailAction extends PayloadAction {
  constructor (payload: any) { super(<%= classify(name) %>ActionTypes.LOAD_FAIL, payload); }
}

export class LoadSuccessAction extends PayloadAction {
  constructor (payload: any) { super(<%= classify(name) %>ActionTypes.LOAD_SUCCESS, payload); }
}

export type <%= classify(name) %>Action = LoadAction |
  LoadFailAction |
  LoadSuccessAction;
