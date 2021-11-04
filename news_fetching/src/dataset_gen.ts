import { getDateTimeFormat, getDurationFormat } from './utils/dayjs'
import { GetNewsAirtable } from './core/airtable'
import { DatasetFormat } from './core/dataset'
import { createWriteStream } from 'fs'
import { format } from '@fast-csv/format'
;(async () => {
  const startTime = Date.now()
  console.log(`===== Start Generating Dataset from Airtable at ${getDateTimeFormat(startTime)} =====`)

  const newsAirtable = await GetNewsAirtable({ filterByFormula: `NOT({LABEL} = '')` })

  console.log(Object.keys(newsAirtable).length)

  const FinalDataset = DatasetFormat(Object.values(newsAirtable))

  const writeStream = createWriteStream(`../DATASET.csv`, {
    encoding: 'utf-8',
  })

  const outCSV = format({ headers: true })
  outCSV.pipe(writeStream)

  for (const r of FinalDataset) outCSV.write(r)

  outCSV.end()

  const stopTime = Date.now()
  console.log(
    `===== Finish Generating Dataset from Airtable at ${getDateTimeFormat(stopTime)} (${getDurationFormat(
      stopTime - startTime
    )}) =====`
  )
})()
