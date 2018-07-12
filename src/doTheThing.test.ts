import doTheThing from './doTheThing';

describe('doTheThing()', () => {
  it('does the thing with the given id', () => {
    const content = doTheThing({
      id: 2,
    });
    expect(content).toBe('Check out this ID! 2');
  });
});
