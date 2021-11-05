export enum CrimeLabel {
  'Accident',
  'Battery / Assault',
  'Cyber Security',
  'Drug',
  'Fraud',
  'Gambling',
  'Murder',
  'National Security',
  'Sexual Abuse',
  'State Crime',
  'Theft / Burglary',
  'Trafficking',
  'Non-crime',
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
