
import {SheetModule} from './module/DataSourceModule/sheetModule'
import {DataSourceEntity} from './entity/DataSourceEntity'
import { IDataSource } from './module/DataSourceModule/IDataSource'

const sheet: IDataSource = new SheetModule()

sheet.readAllDataSource().then((res: Array<DataSourceEntity>) => {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i].toString() + "\n")
  }
})