export enum CrimeLabel {
  'Gambling',
  'Murdur',
  'Sexual Abuse',
  'Theft / Burglary',
  'Drug',
  'Battery / Assault',
  'Accident',
  // 'Other',
  'Non-crime',
  'Fraud',
  'State Crime',
  'Cyber Security',
  'National Security',
  'Trafficking',
}

export type DatasetObj = {
  ID: string
  TITLE: string
  INTRO: string
  CONTENT: string
  ALL: string
} & {
  -readonly [key in keyof typeof CrimeLabel]?: number
}
