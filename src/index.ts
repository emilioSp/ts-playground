import { getAccounts } from './account';

(async () => {
  const accounts = await getAccounts();
  console.log(accounts);
})();