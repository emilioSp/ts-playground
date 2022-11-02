import t from 'tap';
import { getAccounts, getAccount } from './account'; 
import pgDB from './pgDB';

t.teardown(() => {
  pgDB.destroy();
})

t.test('should return accounts in the db', async () => {
  const result = await getAccounts();
  t.same(result[0], { user_id: 1, name: 'Emilio', email: 'emilio@tiscali.it' });
});

t.test('should return account in the db with id = 1', async () => {
  const result = await getAccount(1);
  t.same(result, { user_id: 1, name: 'Emilio', email: 'emilio@tiscali.it' });
});