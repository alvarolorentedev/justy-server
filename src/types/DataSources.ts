import { DataSource } from 'apollo-datasource';
import BuyerSqlDatabase from '../dataSources/buyer/SqlDatabase';
import BidderSqlDatabase from '../dataSources/bidder/SqlDatabase';

export type DataSources = {
  sqlBuyerAPI: DataSource & BuyerSqlDatabase;
  sqlBidderAPI: DataSource & BidderSqlDatabase;
};
