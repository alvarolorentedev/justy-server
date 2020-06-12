const mockCreateBuyer = jest.fn();
const mockLoginBuyer = jest.fn();

jest.mock('../../../src/commands/buyer/create', () => ({
  __esModule: true,
  default: mockCreateBuyer,
}));

jest.mock('../../../src/commands/buyer/login', () => ({
  __esModule: true,
  default: mockLoginBuyer,
}));

import resolvers from '../../../src/resolvers/buyer';
import * as faker from 'faker';
import { DataSources } from '../../../src/types/DataSources';

describe('buyer resolvers', () => {
  const email = faker.random.uuid();
  const password = faker.random.uuid();
  const dataSources: DataSources = {
    sqlBuyerAPI: faker.random.uuid(),
    sqlBidderAPI: faker.random.uuid(),
  };

  beforeAll(() => {
    mockCreateBuyer.mockReset();
    mockLoginBuyer.mockReset();
  });

  describe('Mutation', () => {
    describe('Create', () => {
      test('should have create with the call to sqlDatabase with parameters', async () => {
        await resolvers.Mutation.createBuyer(
          undefined,
          { email, password },
          { dataSources, isTestRequest: true }
        );
        expect(mockCreateBuyer).toHaveBeenCalledWith(
          dataSources.sqlBuyerAPI,
          email,
          password,
          true
        );
      });
    });

    describe('Login', () => {
      test('should have login with the call to sqlDatabase with parameters', async () => {
        await resolvers.Mutation.loginBuyer(
          undefined,
          { email, password },
          { dataSources, isTestRequest: true }
        );
        expect(mockLoginBuyer).toHaveBeenCalledWith(
          dataSources.sqlBuyerAPI,
          email,
          password,
          true
        );
      });
    });
  });
});
