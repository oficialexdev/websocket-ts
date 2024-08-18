import {describe, expect, test} from '@jest/globals';
import { App } from './ws';

describe('App Module', () => {
  test('Pattern should be working!', () => {
    expect(App.test()).toBe("ok");
  });
});