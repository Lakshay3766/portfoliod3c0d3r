import projectsData from '@/data/projectsData'
import kebabCase from '@/lib/utils/kebabCase'
import { PageSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Link from '@/components/Link'

export async function getStaticPaths() {
  const paths = projectsData.map((p) => ({ params: { slug: kebabCase(p.title) } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = projectsData.find((p) => kebabCase(p.title) === params.slug) || null
  return { props: { project } }
}

const TechBadge = ({ children }) => (
  <span className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-200">
    {children}
  </span>
)

export default function ProjectPage({ project }) {
  if (!project) return null
  const { title, description, imgSrc, href, github, tech1, tech2, tech3 } = project
  const isSvg = imgSrc && String(imgSrc).toLowerCase().endsWith('.svg')

  return (
    <>
      <PageSEO title={`${title} – Project`} description={description} />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-zinc-900">
          {imgSrc && (
            <div className="relative h-64 w-full overflow-hidden">
              {isSvg ? (
                <img src={imgSrc} alt={title} className="h-full w-full object-cover" />
              ) : (
                <Image
                  src={imgSrc}
                  alt={title}
                  width={960}
                  height={360}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          )}
          <div className="p-6">
            <h1 className="mb-3 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h1>
            <p className="prose mb-6 max-w-none text-gray-600 dark:text-gray-300">{description}</p>
            <div className="mb-6 flex flex-wrap">
              {tech1 && <TechBadge>{tech1}</TechBadge>}
              {tech2 && <TechBadge>{tech2}</TechBadge>}
              {tech3 && <TechBadge>{tech3}</TechBadge>}
            </div>
            <div className="mt-2 flex gap-3">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-primary-500 px-3 py-1 text-sm font-medium text-primary-600 transition hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20"
                >
                  View Project
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
              <Link
                href="/projects"
                className="inline-flex items-center rounded-md border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}