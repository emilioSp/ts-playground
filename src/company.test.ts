import t from 'tap';
import pgDB from './pgDB';
import { getCompanies } from './company';

t.teardown(() => {
  pgDB.destroy();
});

t.test('should return companies in the db', async () => {
  const result = await getCompanies();
  t.same(result[1], { company_id: 2, name: 'Pazzeschissimo', address: 'via budal 43' });
})