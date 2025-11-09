import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'
import siteMetadata from '@/data/siteMetadata'

export default function GithubPersonalCard() {
  const { data } = useSWR('/api/github-stats', fetcher)

  const repos = new Number(data?.repos)
  const gists = new Number(data?.gists)
  const githubUrl = siteMetadata.github || 'https://github.com'
  const username = githubUrl.replace('https://github.com/', '').replace('/', '')
  const link1 = `${githubUrl}?tab=repositories`
  const link2 = `https://gist.github.com/${username}`

  return (
    <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <MetricCard header="Github Repos" link={link1} metric={repos} isCurrency={false} />
      <MetricCard header="Github Gists" link={link2} metric={gists} isCurrency={false} />
    </div>
  )
}
