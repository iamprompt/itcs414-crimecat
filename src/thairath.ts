import dayjs, { getDateTimeFormat, getDurationFormat } from './utils/dayjs'
import { NewsRes } from './@types'
import { GetNewsAirtable, createNewsAirtable, updateNewsAirtable } from './core/airtable'
import { CleanUpString, compareNews } from './utils'
import { ThairathAPI } from './utils/helpers'

export const GetThairathNews = async (limit: number = 100) => {
  const newsResult: NewsRes = {}

  let ts: number = Date.now() / 1000

  do {
    console.log(`[THR] Loading Titles Before ${dayjs(ts * 1000).format('D MMMM YYYY HH:mm')}`)
    const {
      data: { minTs, items },
    } = await ThairathAPI.TITLE({ section: '/news/crime', ts, limit: limit > 100 ? 100 : limit })

    for (const item of items) {
      try {
        console.log(`  [THR] Loading Content ${Object.keys(newsResult).length + 1} : ${CleanUpString(item.title)}`)

        const {
          data: { items: news },
        } = await ThairathAPI.CONTENT(item.id)

        newsResult[news.id] = {
          NEWSID: `${news.id}`,
          DATE: news.publishTime,
          TITLE: CleanUpString(news.title),
          INTRODUCTION: CleanUpString(news.abstract),
          DESCRIPTION: CleanUpString(news.content),
          SOURCE: 'THAIRATH',
          TAGS: news.tags,
        }
        ts = minTs
      } catch (e) {
        console.log(e)
      }
    }
    if (!ts) break
  } while (Object.keys(newsResult).length < limit)

  console.log(`[THR] Finish Loading ${Object.keys(newsResult).length} Articles`)

  return newsResult
}
;(async () => {
  const startTime = Date.now()
  console.log(`===== Start Fetching Beartai Articles at ${getDateTimeFormat(startTime)} =====`)

  const news = await GetThairathNews(2000)
  const newsAirtable = await GetNewsAirtable()

  const [newNews, updateNews] = await compareNews(news, newsAirtable)

  console.log(`[AIRTABLE] NEW ARTICLES: ${Object.values(newNews).length} Articles`)
  await createNewsAirtable(Object.values(newNews))

  console.log(`[AIRTABLE] UPDATED ARTICLES: ${Object.entries(updateNews).length} Articles`)
  await updateNewsAirtable(updateNews)

  const stopTime = Date.now()
  console.log(
    `===== Finish Fetching Beartai Articles at ${getDateTimeFormat(stopTime)} (${getDurationFormat(
      stopTime - startTime
    )}) =====`
  )
})()
