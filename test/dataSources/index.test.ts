import dataSources from "../../src/dataSources";

describe('datasources', () => {
    it('should export sqlBuyerDatabase', () => {
        expect(dataSources.sqlBuyerAPI).toBeTruthy()
    });
    
    it('should export sqlBidderDatabase', () => {
        expect(dataSources.sqlBidderAPI).toBeTruthy()
    });
});