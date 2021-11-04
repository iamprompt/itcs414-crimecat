import axios from 'axios'
import { config as dotenv } from 'dotenv'

dotenv()

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || ''
const AIRTABLE_WORKING_BASE = process.env.AIRTABLE_WORKING_BASE || ''

const AirtableInstance = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_WORKING_BASE}`,
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  },
})

export const AirtableAPI = (table: string) => {
  const tableUrl = `/${table}`
  return {
    listRecords: function <T>(option: { [key: string]: any }) {
      return AirtableInstance.get<T>(tableUrl, {
        params: {
          ...option,
        },
      })
    },
    retrieveRecord: (recordId: string) => AirtableInstance.get(`${tableUrl}/${recordId}`),
    createRecords: (records: any) =>
      AirtableInstance.post(
        tableUrl,
        { records, typecast: true },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ),
    updateRecords: (records: any) =>
      AirtableInstance.patch(
        tableUrl,
        { records, typecast: true },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ),
  }
}
