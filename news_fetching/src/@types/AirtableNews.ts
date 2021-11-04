export type AirtableRecords<T> = {
  records: Record<T>[]
  offset?: string
}

export type Record<T> = {
  id: string
  fields: T
  createdTime: Date
}

export type NewsFields = {
  NEWSID: string
  SOURCE: string
  TITLE: string
  DATE: Date
  INTRODUCTION: string
  DESCRIPTION: string
  LABEL?: string[]
  TAGS?: string[]
}
