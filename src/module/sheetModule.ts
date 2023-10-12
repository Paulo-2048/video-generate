

import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'
import dotenv from 'dotenv'
dotenv.config()

//GLOBAL VARIABLES
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/drive', "https://spreadsheets.google.com/feeds"]

//Pegar das variaveis de ambiente
const SPREADSHEET_ID = process.env.SPREADSHEET_ID

//AUTHENTICATION