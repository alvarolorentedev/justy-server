import sqlDatabase from '../../../src/dataSources/buyer/SqlDatabase';
import * as faker from 'faker';
import { compare } from 'bcrypt';
import BuyerSerialized from '../../../src/types/BuyerSerialized';

describe('sqlDatabase', () => {
  const config = {
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    useNullAsDefault: true,
  };
  const subject = new sqlDatabase(config);
  beforeAll(async () => {
    await subject.db.schema.createTable('BUYERS', (table) => {
      table.string('id', 36).notNullable().primary();
      table.string('email', 256).notNullable().unique();
      table.string('password', 60).notNullable();
      table.integer('isTest', 60).notNullable().defaultTo(0);
    });
  });

  afterAll(() => {
    subject.db.destroy();
  });

  describe('generates buyer correctly', () => {
    const buyerPassword: string = faker.internet.password();
    const buyerEmail: string = faker.internet.email();

    test('should create a test user correctly', async () => {
      await subject.create(buyerEmail, buyerPassword, true);
      const result = await getBuyerbyEmail(buyerEmail);
      expect(result).not.toBeUndefined();
      expect(result.email).toEqual(buyerEmail);
      expect(result.isTest).toEqual(1);
      expect(await compare(buyerPassword, result.password)).toBeTruthy();
    });

    test('should create a normal user correctly', async () => {
      const buyerPassword: string = faker.internet.password();
      const buyerEmail: string = faker.internet.email();
      await subject.create(buyerEmail, buyerPassword, false);
      const result = await getBuyerbyEmail(buyerEmail);
      expect(result).not.toBeUndefined();
      expect(result.email).toEqual(buyerEmail);
      expect(result.isTest).toEqual(0);
      expect(await compare(buyerPassword, result.password)).toBeTruthy();
    });

    test('should fail create a duplicated user', async () => {
      try {
        await subject.create(buyerEmail, buyerPassword, false);
        fail();
      } catch (error) {}
    });

    test('should be able to login a user with correct password', async () => {
      const result = await subject.validateCredentials(
        buyerEmail,
        buyerPassword
      );
      expect(result).toEqual(true);
    });

    test('should not be able to login a user with incorrect password', async () => {
      const result = await subject.validateCredentials(
        buyerEmail,
        faker.internet.password()
      );
      expect(result).toEqual(false);
    });
  });

  const getBuyerbyEmail = async (email: string): Promise<BuyerSerialized> => {
    const queryResult = (
      await subject.db.select('*').from('BUYERS').where({ email })
    )[0];
    return queryResult;
  };
});
