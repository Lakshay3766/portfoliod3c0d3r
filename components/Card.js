import SocialIcon from './social-icons'
import FolderIcon from './icon'
import Image from '@/components/Image'
import Link from '@/components/Link'
import kebabCase from '@/lib/utils/kebabCase'

const TechBadge = ({ children }) => (
  <span className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-200">
    {children}
  </span>
)

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => {
  const slug = kebabCase(title)
  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="h-full transform overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md dark:border-gray-700 dark:bg-zinc-900">
        {imgSrc ? (
          <div className="relative h-40 w-full overflow-hidden">
            <Link href={`/projects/${slug}`} className="block h-full w-full">
              {String(imgSrc).toLowerCase().endsWith('.svg') ? (
                <img src={imgSrc} alt={title} width={544} height={160} className="h-full w-full object-cover" />
              ) : (
                <Image src={imgSrc} alt={title} width={544} height={160} className="h-full w-full object-cover" />
              )}
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-between px-4 pt-4">
            <FolderIcon />
            <div className="flex flex-row justify-between">
              <div className="mx-1.5">{href ? <SocialIcon kind="external" href={href} size="6" /> : null}</div>
              <div className="mx-1.5">{github ? <SocialIcon kind="github" href={github} size="6" /> : null}</div>
            </div>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              <Link
                href={`/projects/${slug}`}
                className="text-gray-900 transition hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {title}
              </Link>
            </h2>
            <div className="hidden md:flex">
              <div className="mx-1.5">{href ? <SocialIcon kind="external" href={href} size="6" /> : null}</div>
              <div className="mx-1.5">{github ? <SocialIcon kind="github" href={github} size="6" /> : null}</div>
            </div>
          </div>
          <p className="prose mb-4 max-w-none text-gray-600 dark:text-gray-300">{description}</p>
          <div className="mb-4 flex flex-wrap">
            {tech1 && <TechBadge>{tech1}</TechBadge>}
            {tech2 && <TechBadge>{tech2}</TechBadge>}
            {tech3 && <TechBadge>{tech3}</TechBadge>}
          </div>
          <div className="mt-2 flex gap-3">
            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center rounded-md border border-primary-500 px-3 py-1 text-sm font-medium text-primary-600 transition hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20"
            >
              View Details
            </Link>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Live
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
