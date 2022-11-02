import pgDB from "./pgDB";

type Account = {
  readonly account_id: number,
  readonly name: string,
  readonly email: string
};

export const getAccounts = async (): Promise<Account[]> => {
  const rows = await pgDB.select().from<Account>('accounts');
  return rows;
};

export const getAccount = async (id: number): Promise<Account> => {
  const row = await pgDB.select().from<Account>('accounts').where('user_id', '=', id);
  return row[0];
}