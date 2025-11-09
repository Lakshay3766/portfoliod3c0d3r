import ContactLink from '@/components/ContactLink'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="Ways to connect" />
      <div className="mx-auto max-w-4xl overflow-hidden">
        <h1 className="bg-gradient-to-r from-primary-500 via-purple-500 to-indigo-500 bg-clip-text text-3xl font-extrabold leading-9 tracking-tight text-transparent sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Let’s connect. Pick your favorite platform.</p>
        <div className="pt-8 pb-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {siteMetadata.email && (
              <ContactLink href={`mailto:${siteMetadata.email}`} title="Email" icon="gmail" />
            )}
            {siteMetadata.github && (
              <ContactLink href={siteMetadata.github} title="GitHub" icon="github" />
            )}
            {siteMetadata.socialAccount?.twitter && (
              <ContactLink
                href={`https://twitter.com/${siteMetadata.socialAccount.twitter}`}
                title="Twitter"
                icon="twitter"
              />
            )}
            {siteMetadata.linkedin && (
              <ContactLink href={siteMetadata.linkedin} title="LinkedIn" icon="linkedin" />
            )}
          </ul>
          </div>
      </div>
    </>
  )
}

export default Contact
