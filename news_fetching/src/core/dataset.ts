import { NewsFields } from '../@types/AirtableNews'
import { CrimeLabel, DatasetObj } from '../@types/dataset'

export const DatasetFormat = (news: NewsFields[]): DatasetObj[] => {
  return news.map((n) => {
    console.log(n)

    const LABEL: { -readonly [key in keyof typeof CrimeLabel]?: number } = {}

    if (n.LABEL) {
      for (const lab of Object.values(CrimeLabel).filter((k) => typeof k === 'string') as (keyof typeof CrimeLabel)[]) {
        LABEL[lab] = +n.LABEL.includes(lab)
      }
    }

    return {
      ID: `${n.SOURCE}_${n.NEWSID}`,
      TITLE: n.TITLE,
      INTRO: n.INTRODUCTION,
      CONTENT: n.DESCRIPTION,
      ALL: [n.TITLE, n.INTRODUCTION, n.DESCRIPTION].join(' '),
      ...LABEL,
    }
  })
}
