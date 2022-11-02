import pgDB from "./pgDB";

type Company = {
  readonly company_id: number,
  readonly name: string,
  readonly address: string
};

export const getCompanies = async (): Promise<Company[]> => {
  const rows = await pgDB.select().from<Company>('company');
  return rows;
};