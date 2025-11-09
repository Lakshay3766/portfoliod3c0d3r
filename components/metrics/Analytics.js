import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'
import siteMetadata from '@/data/siteMetadata'

export default function AnalyticsCard() {
  const { data } = useSWR('/api/views', fetcher)

  const pageViews = new Number(data?.total)
  const link = siteMetadata.siteUrl || 'https://vercel.app/'

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} isCurrency={false} />
}
