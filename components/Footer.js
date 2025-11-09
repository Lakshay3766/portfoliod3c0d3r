import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href={siteMetadata.website || siteMetadata.siteUrl || '/'} className="link-underline">
              {siteMetadata.author}{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/projects" className="link-underline">
              Explore Cyber Projects
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href={siteMetadata.website || siteMetadata.siteUrl || '/'} className="link-underline">
              {siteMetadata.author}{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
