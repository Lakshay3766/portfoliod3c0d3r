// import Link from '@/components/Link'
import Analytics from 'components/metrics/Analytics'
import Twitter from '@/components/metrics/Twitter'
import GithubPersonal from '@/components/metrics/GithubPersonal'
import GitHub from '@/components/metrics/Github'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import TopTracks from '@/components/TopTracks'
import NowPlaying from '@/components/NowPlaying'

export default function Stats() {
  return (
    <>
      <PageSEO
        title={`Stats - ${siteMetadata.author}`}
        description="Statistics about my blog, Github, Twitter and more"
      />
      <div className="mx-auto max-w-4xl overflow-hidden">
        <div className="space-y-3 pt-6 pb-6 md:space-y-5">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Stats
            </span>
          </h1>
          <p className="text-md leading-7 text-gray-600 dark:text-gray-300">
            A quick dashboard of site metrics, GitHub activity, and what I’m listening to.
          </p>
        </div>
        <div className="pt-2">
          <div className="flex w-full flex-col">
            <GithubPersonal />
            <GitHub />
          </div>
          {siteMetadata?.socialAccount?.twitter && (
            <>
              <div className="grid w-full grid-cols-1 gap-4 py-2 sm:grid-cols-2">
                <Twitter type="followers" />
                <Twitter type="following" />
              </div>
              <div className="grid w-full grid-cols-1 gap-4 py-2 sm:grid-cols-2">
                <Twitter type="total_tweets" />
                <Analytics />
              </div>
            </>
          )}
          {!siteMetadata?.socialAccount?.twitter && (
            <div className="grid w-full grid-cols-1 gap-4 py-2 sm:grid-cols-2">
              <Analytics />
            </div>
          )}
        </div>
        <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
          My <span className="text-green-500">Spotify</span> Top Songs
        </h2>
        <p className="text-md mb-4 text-gray-600 dark:text-gray-400">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.
        </p>
        <div>
          <NowPlaying />
        </div>
        <TopTracks />
        <div className="flex flex-col pl-4 pt-10">
          <p className="text-md text-gray-600 dark:text-gray-400">
            Got a song recommendation? I’d love to hear it.
          </p>
          <a
            className="text-md mt-4 rounded-full border px-8 py-2 text-center font-normal text-gray-800 transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white dark:text-gray-200"
            href={`mailto:${siteMetadata.email}?subject=Song%20suggestion&body=Hey%20there,%20you%20should%20listen%20to%3A%20`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Suggest a song via email
          </a>
        </div>
      </div>
    </>
  )
}
