import { getDateTimeFormat, getDurationFormat } from './utils/dayjs'
import { NewsRes } from './@types'
import { DailyNewsAPI } from './utils/helpers'
import { CleanUpString, compareNews } from './utils'
import { createNewsAirtable, GetNewsAirtable, updateNewsAirtable } from './core/airtable'

export const GetDailyNewsArts = async (limit: number = 100) => {
  const newsResult: NewsRes = {}
  let page: number = 1
  let totalPages: number = 0

  do {
    console.log(`[DLN] Loading Page ${page}`)
    const { data, headers } = await DailyNewsAPI.NEWS({ page })

    for (const item of data) {
      console.log(`  [DLN] Article ${Object.keys(newsResult).length + 1} : ${CleanUpString(item.title.rendered)}`)

      newsResult[item.id] = {
        NEWSID: `${item.id}`,
        DATE: item.date,
        TITLE: CleanUpString(item.title.rendered),
        INTRODUCTION: CleanUpString(item.acf.custom_excerpt) || '',
        DESCRIPTION: CleanUpString(item.content.rendered),
        SOURCE: 'DAILYNEWS',
      }
    }

    page += 1
    totalPages = parseInt(headers['x-wp-totalpages'])
  } while (Object.keys(newsResult).length < limit && page <= totalPages)

  console.log(`[DLN] Finish Loading ${Object.keys(newsResult).length} Articles`)

  return newsResult
}
;(async () => {
  const startTime = Date.now()
  console.log(`===== Start Fetching Thairath Articles at ${getDateTimeFormat(startTime)} =====`)

  const news = await GetDailyNewsArts(500)
  const newsAirtable = await GetNewsAirtable({})

  const [newNews, updateNews] = await compareNews(news, newsAirtable, ['LABEL', 'DATE', 'TAGS'])

  console.log(`[AIRTABLE] NEW ARTICLES: ${Object.values(newNews).length} Articles`)
  await createNewsAirtable(Object.values(newNews))

  console.log(`[AIRTABLE] UPDATED ARTICLES: ${Object.entries(updateNews).length} Articles`)
  await updateNewsAirtable(updateNews)

  const stopTime = Date.now()
  console.log(
    `===== Finish Fetching Thairath Articles at ${getDateTimeFormat(stopTime)} (${getDurationFormat(
      stopTime - startTime
    )}) =====`
  )
})()
