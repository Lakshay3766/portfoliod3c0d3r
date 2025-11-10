import { FaGraduationCap, FaBlackTie, FaTrophy, FaBaby } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiOutlineDatabase } from 'react-icons/hi'
import { BsBuilding } from 'react-icons/bs'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

export default function Timeline() {
  return (
    <div>
      <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
        {/* Present — AI-driven cybersecurity work */}
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className=" absolute -left-3 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900">
            <FaBlackTie className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Building NyxByte (AI‑driven cybersecurity)
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span>
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Working on automation for phishing detection, PII leak prevention, and defensive tooling.
          </p>
        </li>
        {/* Security internships */}
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Cybersecurity Intern — HexDefender
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Sept 2025 – Present
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            VAPT, SOC operations (SIEM, malware analysis), incident response; Army Intelligence cases.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 ring-8 ring-white dark:bg-yellow-700 dark:ring-gray-900">
            <SiLeetcode />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Learning C++ & DSA</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Strengthening fundamentals while advancing offensive/defensive cybersecurity skills.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            <HiOutlineDatabase />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Cyber Rakshak Intern
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2025 – Sept 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            OSINT, social media analysis, digital forensics reports for real Cyber Cell cases.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Intern — Gurugram Cyber Cell (GPCSSI)
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2025 – July 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Secure coding, vulnerability assessment, threat mitigation exposure, OSINT & forensics.
          </p>
        </li>
        {/* Student leadership */}
        <li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <BsBuilding />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Student Director — Unstop</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct 2024 – May 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Led engagement campaigns for national hackathons; community building and leadership.
          </p>
        </li>
        {/* Education — B.Tech */}
        <li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-300 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">B.Tech in Cyber Security — PIET</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Expected Graduation: May 2026
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Relevant coursework: Network Security, Cryptography, Cyber Forensics.
          </p>
        </li>
        {/* Education — Class XII */}
        <li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-300 ring-8 ring-white dark:bg-indigo-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Class XII (CBSE)</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Graduated: May 2022
          </time>
        </li>
        {/* Achievements */}
        <li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 ring-8 ring-white dark:bg-yellow-700 dark:ring-gray-900">
            <FaTrophy />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Achievements & Awards</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 – 2025</time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            2nd Prize, Microsoft Hackathon (2025) • Top 5 Finalist, Google Gen AI Hackathon (2024) • Finalist, Smart India Hackathon (2024) • Winner, Maestros (Software & Hardware) (2024) • Winner, Manthan – National Hackathon (2023) • Winner, Ideathon (PIET) (2023)
          </p>
        </li>
        {/* Early life */}
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaBaby />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Born</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2004</time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">—</p>
        </li>
      </ol>
    </div>
  )
}
