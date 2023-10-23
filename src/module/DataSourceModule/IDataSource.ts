import { DataSourceEntity } from "../../entity/DataSourceEntity";

interface IDataSource {
  readAllDataSource(): Promise<Array<DataSourceEntity>>;

  retrieveDataById(id: string): Promise<DataSourceEntity>;

  updateDataById?(id: string, column: string, value: string): Promise<boolean>;
}

export { IDataSource };
