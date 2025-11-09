import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'
import siteMetadata from '@/data/siteMetadata'

export default function TwitterCard({ type }) {
  // Hide Twitter metrics entirely if no handle is configured
  const handle = (siteMetadata?.socialAccount?.twitter || '').replace('@', '')
  const { data } = useSWR(handle ? '/api/twitter-user' : null, fetcher)

  if (!handle || !data || !data.user) {
    return null
  }

  const followers = data?.user?.public_metrics?.followers_count
  const following = data?.user?.public_metrics?.following_count
  const count = data?.user?.public_metrics?.tweet_count
  // Prefer configured handle for link; fall back to API username
  const username = handle || data?.user?.username
  const link = `https://twitter.com/${username}`

  return (
    <>
      {type == 'followers' && (
        <MetricCard header="Twitter Followers" link={link} metric={followers} isCurrency={false} />
      )}
      {type == 'following' && (
        <MetricCard header="Twitter Following" link={link} metric={following} isCurrency={false} />
      )}
      {type == 'total_tweets' && (
        <MetricCard header="Tweet Count" link={link} metric={count} isCurrency={false} />
      )}
    </>
  )
}
