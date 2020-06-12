const mockErrorLogger = jest.fn();

jest.mock('../../../src/utils/logger', () => ({
  __esModule: true,
  default: {
    error: mockErrorLogger,
  },
}));

import loginBuyer from '../../../src/commands/buyer/login';
import * as faker from 'faker';
import sqlDatabase from '../../../src/dataSources/buyer/SqlDatabase';

describe('create buyer', () => {
  const sqlDataSource = {
    loginBuyer: jest.fn(),
  };

  const getSqlDataSourceFromMock = (): sqlDatabase =>
    (sqlDataSource as unknown) as sqlDatabase;

  describe('create buyer correctly', () => {
    let result;
    const email = faker.random.uuid();
    const password = faker.random.uuid();
    const isTestRequest = false;

    beforeAll(async () => {
      sqlDataSource.loginBuyer.mockReset();
      sqlDataSource.loginBuyer.mockResolvedValue(undefined);
      result = await loginBuyer(
        getSqlDataSourceFromMock(),
        email,
        password,
        isTestRequest
      );
    });

    test('should call database', () => {
      expect(sqlDataSource.loginBuyer).toHaveBeenCalledWith(
        email,
        password,
        isTestRequest
      );
    });

    test('should return success response with expected id', () => {
      expect(result).toEqual({ success: true });
    });
  });

  describe('error creating buyer', () => {
    let result;
    const expectedError = faker.random.uuid();
    const email = faker.random.uuid();
    const password = faker.random.uuid();
    const isTestRequest = false;

    beforeAll(async () => {
      sqlDataSource.loginBuyer.mockReset();
      mockErrorLogger.mockReset();
      sqlDataSource.loginBuyer.mockRejectedValue(expectedError);
      result = await loginBuyer(
        getSqlDataSourceFromMock(),
        email,
        password,
        isTestRequest
      );
    });
    test('should call database', () => {
      expect(sqlDataSource.loginBuyer).toHaveBeenCalledWith(
        email,
        password,
        isTestRequest
      );
    });

    test('should call error logger with error', () => {
      expect(mockErrorLogger).toHaveBeenCalledWith(expectedError);
    });

    test('should return success response with expected id', () => {
      expect(result).toEqual({ success: false });
    });
  });
});
