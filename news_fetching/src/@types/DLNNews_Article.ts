export type DLNNewsArticle = {
  id: number
  date: Date
  date_gmt: Date
  title: Title
  content: Content
  acf: Acf
}

export type Acf = {
  custom_excerpt: string
}

export type Content = {
  rendered: string
  protected: boolean
}

export type Title = {
  rendered: string
}
