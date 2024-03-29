const mockCreateBuyer = jest.fn();
const mockvalidateCredentialsBuyer = jest.fn();

jest.mock('../../../src/commands/buyer/create', () => ({
  __esModule: true,
  default: mockCreateBuyer,
}));

jest.mock('../../../src/commands/buyer/validateCredentials', () => ({
  __esModule: true,
  default: mockvalidateCredentialsBuyer,
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
    mockvalidateCredentialsBuyer.mockReset();
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

    describe('validateCredentials', () => {
      test('should have validateCredentials with the call to sqlDatabase with parameters', async () => {
        await resolvers.Mutation.validateCredentialsBuyer(
          undefined,
          { email, password },
          { dataSources }
        );
        expect(mockvalidateCredentialsBuyer).toHaveBeenCalledWith(
          dataSources.sqlBuyerAPI,
          email,
          password
        );
      });
    });
  });
});
