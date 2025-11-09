import React from 'react'

export default function CyberBookCard({
  title,
  author,
  href,
  accent = ['#0ea5e9', '#7c3aed'],
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} by ${author}`}
      className="group block w-full"
    >
      <div
        className="relative overflow-hidden rounded-xl border border-white/10 shadow-xl ring-1 ring-white/10"
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent[0]} 0%, ${accent[1]} 100%)`,
        }}
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cyber-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#ffffff" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyber-grid)" />
        </svg>

        <div className="relative z-10 flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4h16v16H4z" opacity="0.25" />
                <path d="M6 8h8" />
                <path d="M6 12h12" />
                <path d="M6 16h10" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-white drop-shadow-sm">
                {title}
              </div>
              <div className="mt-1 text-sm text-white/80">by {author}</div>
            </div>
          </div>
          <div className="text-right">
            <span className="rounded-md bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Cyber Book
            </span>
            <div className="mt-2 text-xs text-white/70">View on Goodreads →</div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 px-6 py-3 text-xs text-white/80">
          Enhanced neon gradient, subtle grid overlay, and glassy badges for a crisp cyber feel.
        </div>
      </div>
    </a>
  )
}