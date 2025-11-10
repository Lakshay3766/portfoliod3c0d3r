/* eslint-disable import/no-anonymous-default-export */
import { getTopTracks } from '@/lib/spotify'

export default async (_, res) => {
  try {
    const response = await getTopTracks()

    // If Spotify returned an error or unauthorized, return empty list gracefully
    if (!response.ok) {
      res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
      return res.status(200).json({ tracks: [] })
    }

    const data = await response.json()
    const items = Array.isArray(data?.items) ? data.items : []

    const tracks = items.slice(0, 10).map((track) => ({
      artist: Array.isArray(track?.artists)
        ? track.artists.map((_artist) => _artist?.name).filter(Boolean).join(', ')
        : '',
      songUrl: track?.external_urls?.spotify ?? '',
      imageUrl: track?.album?.images?.[1]?.url ?? track?.album?.images?.[0]?.url ?? '',
      title: track?.name ?? '',
    }))

    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')
    return res.status(200).json({ tracks })
  } catch (err) {
    // On unexpected errors, return empty list to avoid crashing the page
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    return res.status(200).json({ tracks: [] })
  }
}
