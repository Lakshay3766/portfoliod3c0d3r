/* eslint-disable import/no-anonymous-default-export */
import { getUser } from '@/lib/twitter'

export default async (_, res) => {
  // Read username from site metadata; gracefully handle absence
  const { default: siteMetadata } = await import('@/data/siteMetadata')
  const rawHandle = siteMetadata?.socialAccount?.twitter || ''
  const username = rawHandle.replace('@', '')

  if (!username) {
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=1800')
    return res.status(200).json({ user: null })
  }

  const response = await getUser(username)

  if (!response || !response.data) {
    res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=300')
    return res.status(200).json({ user: null })
  }

  const user = { ...response.data }

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')
  return res.status(200).json({ user })
}
