// import { reverse } from './reverse';
import {rev} from './reverse'
test('reverse a string', () => {
  const s = 'hello'
  expect(rev(s)).toEqual('olleh');
})