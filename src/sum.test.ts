import t from 'tap';
import sum from './sum';

t.test('2 + 2 is 4', async () => {
  const result = sum(2, 2);
  t.equal(result, 4);
});