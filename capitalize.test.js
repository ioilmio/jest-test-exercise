import { test } from '@jest/globals';
// const capitalize = require('capitalize');
import {capitalize} from './capitalize';
// import {jest} from '@jest/globals';


test('capitalize string', () => {
  expect(capitalize('hello')).toBe('Hello');
})