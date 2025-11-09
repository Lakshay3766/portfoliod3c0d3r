import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const iconMap = {
  gmail: FiMail,
  github: AiOutlineGithub,
  twitter: AiOutlineTwitter,
  linkedin: FaLinkedinIn,
}

const ContactLink = ({ title, href, icon }) => {
  const Icon = iconMap[icon]
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white/60 px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-gray-700 dark:bg-gray-800/60 dark:hover:bg-gray-800"
      >
        {Icon ? (
          <Icon className="h-7 w-7 text-gray-700 transition group-hover:text-primary-600 dark:text-gray-200 dark:group-hover:text-primary-color-dark-500" />
        ) : null}
        <span className="text-xl font-semibold tracking-tight text-gray-900 transition group-hover:text-primary-700 dark:text-gray-100 dark:group-hover:text-primary-color-dark-500">
          {title}
        </span>
      </a>
    </li>
  )
}

export default ContactLink
