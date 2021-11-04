export type ThairathLoadmore = {
  minTs: number
  lastModified: Date
  items: NewsSummary[]
}

export type NewsSummary = {
  id: number
  title: string
  section: string
  sectionEn: string
  topic: string
  topicEn: string
  topicPath: string
  fullPath: string
  abstract: string
  publishTime: Date
  publishTimeTh: string
  image: string
  canonical: string
}

export type ThairathNewsContent = {
  headers: { 'Cache-Control': string }
  minTs: number
  lastModified: Date
  partner: Partner
  items: NewsContent
  linkedData: LinkedData
  recommendSetting: RecommendSetting
  adsSetting: { [key: string]: boolean }
}

export type NewsContent = {
  id: number
  title: string
  type: number
  sourceFrom: string
  entityType: number
  sectionId: string
  section: string
  sectionEn: string
  topicId: string
  topic: string
  topicEn: string
  contentarea: string
  contentareaEn: null
  topicPath: string
  fullPath: string
  categoryName: null
  categoryNameEn: null
  categoryFullPath: null
  categoryFullPathTh: null
  breadcrumb: Breadcrumb[]
  thumbnail: Thumbnail
  abstract: string
  image: string
  imageSML: ImageSML
  content: string
  embeds: any[]
  hasVideo: number
  Gallery: any[]
  tags: string[]
  publishTime: Date
  publishTimeTh: string
  viewCount: number
  credit: string
  canonical: string
  layout: Layout
  related_id: any[]
  relates: Relate[]
  factcheck: null
  premiumType: string
  followTopic: null
  writer: null
  storytelling: string
  creator_id: number
  team_id: number
  character: number
}

export type Breadcrumb = {
  page: string
  link: string
}

export type ImageSML = {
  small: string
  medium: string
  large: string
}

export type Layout = {
  readmore: boolean
  theme: string
}

export type Relate = {
  id: number
  title: string
  image: string
  publishTime: Date
  publishTimeTh: string
  topicPath: string
  fullPath: string
}

export type Thumbnail = {
  EntityType: number
  display: string
  video: null
  image: string
  shareImage: string
  imageSML: ImageSML
}

export type LinkedData = {
  dataLinks: string[]
  imageLinks: string[]
  galleryLinks: any[]
}

export type Partner = {
  isPartner: boolean
  partnersource: null
}

export type RecommendSetting = {
  status: number
  percent: number
  open: Date
  close: Date
}
