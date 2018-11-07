import { expect } from 'chai';

import isUp from '../src/index';

console.log(typeof isUp);

describe('is-up', () => {
  it('up', async () => {
    expect(await isUp('https://google.com')).to.be.true;
  });

  it('down', async () => {
    expect(await isUp('https://example.abc.com')).to.be.false;
  });

  it('invalid domain', async () => {
    try {
      await isUp('unicorn');
      throw new Error('never match');
    } catch (e) {
      expect(e).to.match(/Invalid domain/);
    }
  });
});