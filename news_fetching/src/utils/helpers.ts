import axios from 'axios'
import { DLNNewsArticle } from '../@types/DLNNews_Article'
import { ThairathLoadmore, ThairathNewsContent } from '../@types/THRNews'

const ThairathInstance = axios.create({
  baseURL: 'https://www.thairath.co.th',
})

export const ThairathAPI = {
  TITLE: async ({ section = '/news/crime', ts = Date.now(), limit = 100 }) =>
    await ThairathInstance.get<ThairathLoadmore>('/loadmore', {
      params: {
        section,
        ts,
        limit,
      },
    }),
  CONTENT: async (contentId: number) => await ThairathInstance.get<ThairathNewsContent>(`/api-content/${contentId}`),
}

const DailyNewsInstance = axios.create({
  baseURL: 'https://www.dailynews.co.th/wp-json/wp/v2',
  params: {
    per_page: 100,
  },
})

export const DailyNewsAPI = {
  NEWS: async ({ news_group = 48, _fields = ['id', 'title', 'content', 'date_gmt', 'acf.custom_excerpt'], page = 1 }) =>
    await DailyNewsInstance.get<DLNNewsArticle[]>('/news', {
      params: {
        news_group,
        _fields,
        page,
      },
    }),
}
