import { NewsRes } from '../@types'
import { AirtableRecords, NewsFields } from '../@types/AirtableNews'
import { delay } from '../utils'
import { AirtableAPI } from '../utils/airtable'

export const GetNewsAirtable = async () => {
  console.log(`[AIRTABLE] Fetching Airtable Records`)
  const newsRes: NewsRes = {}
  let offset = undefined
  do {
    const options: { [key: string]: any } = { pageSize: 100, view: 'All News' }
    if (offset) options['offset'] = offset
    const { data } = await AirtableAPI('News').listRecords<AirtableRecords<NewsFields>>(options)

    for (const news of data.records) {
      newsRes[news.id] = {
        NEWSID: `${news.fields.NEWSID}`,
        DATE: news.fields.DATE,
        TITLE: news.fields.TITLE,
        INTRODUCTION: news.fields.INTRODUCTION,
        DESCRIPTION: news.fields.DESCRIPTION,
        SOURCE: news.fields.SOURCE,
        TAGS: news.fields.TAGS,
      }
    }
    console.log(`  [AIRTABLE] ${Object.keys(newsRes).length} Records Fetched`)
    await delay(300)
    offset = data.offset
  } while (offset)

  console.log(`[AIRTABLE] Finish Fetching ${Object.keys(newsRes).length} Airtable Records`)
  return newsRes
}

export const createNewsAirtable = async (posts: NewsFields[]) => {
  const airtableFormatted = posts.map((p) => ({ fields: p }))
  if (airtableFormatted.length > 0) {
    do {
      await AirtableAPI('News').createRecords(airtableFormatted.splice(0, 10))
      console.log(`  [AIRTABLE] Successfully Uploaded ${posts.length - airtableFormatted.length}/${posts.length}`)

      await delay(250)
    } while (airtableFormatted.length > 0)
  }
}

export const updateNewsAirtable = async (posts: { [key: string]: NewsFields }) => {
  const airtableFormatted = Object.entries(posts).map(([id, p]) => ({ id, fields: p }))
  if (airtableFormatted.length > 0) {
    do {
      await AirtableAPI('News').updateRecords(airtableFormatted.splice(0, 10))
      console.log(
        `  [AIRTABLE] Successfully Updated ${Object.keys(posts).length - airtableFormatted.length}/${
          Object.keys(posts).length
        }`
      )
      await delay(250)
    } while (airtableFormatted.length > 0)
  }
}
