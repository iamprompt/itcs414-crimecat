import axios from 'axios'
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
