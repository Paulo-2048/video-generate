import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { IDataSource } from "./IDataSource";
import { DataSourceEntity } from "../../entity/DataSourceEntity";
import dotenv from "dotenv";
dotenv.config({ path: "config/.env" });

interface ISheetDataColumns {
  index: string;
  category: string;
  videoType: string;
  part1: string;
  part2: string;
  title: string;
  description: string;
  playlist: string;
  hashtags: string;
}

class SheetModule implements IDataSource{

  private SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/drive",
    "https://spreadsheets.google.com/feeds",
  ];
  private SPREADSHEET_ID = process.env.SPREADSHEET_ID || "";
  private CREDENTIALS_PATH = "config/service_account.json";

  private authKey = new JWT({
    keyFile: this.CREDENTIALS_PATH,
    scopes: this.SCOPES,
  });

  private doc = new GoogleSpreadsheet(this.SPREADSHEET_ID, this.authKey);

  async readAllDataSource(): Promise<Array<DataSourceEntity>> {
    await this.doc.loadInfo();

    const sheet = this.doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    let results: Array<DataSourceEntity> = [];

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].get("category") == undefined || rows[i].get("category") == "")
        break;

      results.push(new DataSourceEntity(rows[i]));
    }

    return results;
  }


  async retrieveDataById(index: string): Promise<DataSourceEntity> {
    await this.doc.loadInfo();

    const sheet = this.doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    let results: DataSourceEntity | undefined = undefined;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].get("category") == undefined || rows[i].get("category") == "")
        break;

      if (rows[i].get("index") == index) results = new DataSourceEntity(rows[i]);
    }

    if (results == undefined)
      throw new Error(`No data found for the ${index} index`);

    return results;
  }

  
  async updateDataById(
    index: string,
    column: string,
    value: string
  ): Promise<boolean> {
    await this.doc.loadInfo();

    const sheet = this.doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].get("category") == undefined || rows[i].get("category") == "")
        break;

      if (rows[i].get("index") == index) {
        rows[i].set(column, value);
        await rows[i].save();
        return true;
      }
    }
    return false;
  }
}

export { SheetModule, ISheetDataColumns };
