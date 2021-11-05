import { decode } from 'html-entities'
import { NewsFields } from '../@types/AirtableNews'

export const CleanUpString = (s: string) =>
  decode(s)
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/\s\s+/g, ' ')
    .split('\n')
    .filter((c) => c)
    .join('')
    .trim()

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const isObjectEqual = (m: { [key: string]: any }, n: { [key: string]: any }, ignoreKey: string[] = []) => {
  for (const k of ignoreKey) {
    if (Object.keys(m).includes(k)) delete m[k]
    if (Object.keys(n).includes(k)) delete n[k]
  }

  if (Object.keys(m).length !== Object.keys(n).length) return false
  if (Object.keys(m).sort().join(', ') !== Object.keys(n).sort().join(', ')) return false

  for (const [k, v] of Object.entries(m)) {
    if (Array.isArray(v)) {
      if (v.sort().join(', ') !== n[k].sort().join(', ')) return false
    } else if (v instanceof Date) {
      if (v.getTime() !== n[k].getTime()) return false
    } else if (v !== n[k]) {
      return false
    }
  }
  return true
}

export const compareNews = async (
  newPosts: { [key: string]: NewsFields },
  oldPosts: { [key: string]: NewsFields },
  ignoreKey: string[] = ['LABEL', 'DATE']
) => {
  const updatePosts: { [key: string]: NewsFields } = {}
  for (const [recId, oldPost] of Object.entries(oldPosts)) {
    const newPost = newPosts[oldPost.NEWSID]

    let isEqual = true

    if (newPost) {
      isEqual = isObjectEqual(newPost, oldPost, ignoreKey)
      // console.log(isEqual)
      // console.log(newPost)
      // console.log(oldPost)

      if (!isEqual) {
        updatePosts[recId] = newPost
      }
      delete newPosts[oldPost.NEWSID]
    }
  }

  return [newPosts, updatePosts]
}
