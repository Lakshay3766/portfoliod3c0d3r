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
  const {
    title,
    description,
    imgSrc,
    href,
    github,
    tech1,
    tech2,
    tech3,
    overview,
    features = [],
    stack = [],
    challenges = [],
    outcomes = [],
  } = project
  const isSvg = imgSrc && String(imgSrc).toLowerCase().endsWith('.svg')

  return (
    <>
      <PageSEO title={`${title} – Project`} description={description} />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-zinc-900">
          {imgSrc && (
            <div className="relative h-64 w-full overflow-hidden">
              {isSvg ? (
                <img src={imgSrc} alt={title} className="h-full w-full bg-gray-900 object-contain p-3" />
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

            {/* Overview */}
            {overview && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Overview</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-200">{overview}</p>
              </section>
            )}

            {/* Features */}
            {features?.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Key Features</h2>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  {features.map((f) => (
                    <li key={f} className="text-gray-700 dark:text-gray-200">
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech Stack */}
            {stack?.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tech Stack</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-900 dark:border-gray-600 dark:text-gray-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges */}
            {challenges?.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Challenges</h2>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  {challenges.map((c) => (
                    <li key={c} className="text-gray-700 dark:text-gray-200">
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Outcomes */}
            {outcomes?.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Outcomes</h2>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  {outcomes.map((o) => (
                    <li key={o} className="text-gray-700 dark:text-gray-200">
                      {o}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  )
}