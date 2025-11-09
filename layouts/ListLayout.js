import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import ViewCounter from '@/components/ViewCounter'
import Image from '@/components/Image'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const tags = Array.isArray(frontMatter.tags) ? frontMatter.tags : []
    const searchContent = frontMatter.title + frontMatter.summary + tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            const tags = Array.isArray(frontMatter.tags) ? frontMatter.tags : []
            const images = Array.isArray(frontMatter.images) ? frontMatter.images : []
            const cover = images.length > 0 ? images[0] : null
            return (
              <li key={slug} className="py-6">
                <Link
                  href={`/blog/${slug}`}
                  className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <article className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
                    <dl>
                      <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                        {' • '}
                        <ViewCounter className="mx-1" slug={slug} />
                        views
                      </dd>
                    </dl>
                    {cover && (
                      <div className="mb-3 overflow-hidden rounded-md">
                        {String(cover).toLowerCase().endsWith('.svg') ? (
                          <img
                            src={cover}
                            alt={title}
                            width={960}
                            height={540}
                            className="h-48 w-full object-cover"
                          />
                        ) : (
                          <Image
                            src={cover}
                            alt={title}
                            width={960}
                            height={540}
                            className="h-48 w-full object-cover"
                          />
                        )}
                      </div>
                    )}
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <span className="text-gray-900 transition duration-500 ease-in-out group-hover:text-primary-500 dark:text-gray-100 group-hover:dark:text-primary-500">
                              {title}
                            </span>
                          </h2>
                        </div>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="mt-2 mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500"
                            >
                              {tag.split(' ').join('-')}
                            </span>
                          ))}
                        </div>
                        <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
