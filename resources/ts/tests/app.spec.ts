import { sayHello } from './../app';

describe('checking #sayHello', () => {
  it('should return "Hello"', () => {
    expect(sayHello()).toBe('Hello');
  });
});
