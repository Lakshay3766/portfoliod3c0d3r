import siteMetadata from '@/data/siteMetadata'
import RecommendCard from '@/components/RecommendCard'
import BookRecommendCard from '@/components/BookRecommendCard'
import { PageSEO } from '@/components/SEO'
import cyberToolsData from '@/data/cyberToolsData'
import cyberBooksData from '@/data/cyberBooksData'

export default function Recommends() {
  
  return (
    <>
      <PageSEO
        title={`Recommendations - ${siteMetadata.author}`}
        description="Curated cybersecurity books, tools, and resources"
      />
      <div className="mx-auto max-w-3xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recommends
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A curated list of cybersecurity books, tools, and learning resources
          </p>
        </div>
        <div className="space-y-2 pt-3 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            <span role="img" className="mr-4" aria-label="books">
              📚
            </span>
            Cybersecurity Books
          </h2>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            My go-to books for SOC, DFIR, web security, and reverse engineering
          </p>
        </div>
        <div className="container py-6">
          <div className="-m-4 flex flex-wrap">
            {cyberBooksData.map((b) => (
              <BookRecommendCard
                key={b.title}
                title={b.title}
                description={b.description}
                href={b.href}
                rating={b.rating}
              />
            ))}
          </div>
        </div>
        <div className="container py-7">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              <span role="img" className="mr-4" aria-label="tools">
                🛠️
              </span>
              Cybersecurity Tools
            </h2>
            <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
              Daily drivers for pentesting, OSINT, reversing, and network analysis
            </p>
          </div>
          <div className="container py-4">
            <div className="-m-4 flex flex-wrap">
              {cyberToolsData.map((d) => (
                <RecommendCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  tags={d.tags}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
