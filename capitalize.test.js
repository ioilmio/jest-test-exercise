import { capitalize } from './capitalize';


test('capitalize string', () => {
  expect(capitalize('hello')).toBe('Hello');
})