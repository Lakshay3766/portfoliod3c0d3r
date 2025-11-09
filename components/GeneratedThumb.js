import React from 'react'

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

const palettes = [
  ['#0ea5e9', '#7c3aed'], // sky → violet
  ['#22c55e', '#0ea5e9'], // green → sky
  ['#f59e0b', '#ef4444'], // amber → red
  ['#06b6d4', '#3b82f6'], // cyan → blue
  ['#a855f7', '#ec4899'], // purple → pink
  ['#1f2937', '#374151'], // slate depth
]

export default function GeneratedThumb({ title = '', tags = [] }) {
  const seed = hashString(title || 'post')
  const [c1, c2] = palettes[seed % palettes.length]

  return (
    <div
      role="img"
      aria-label={`Thumbnail for ${title}`}
      className="relative h-48 w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10"
      style={{
        backgroundImage: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
      }}
    >
      {/* subtle pattern overlay */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#ffffff" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* icon and title */}
      <div className="relative z-10 flex h-full w-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" />
              <path d="M9.5 12l2 2 4-4" />
            </svg>
          </div>
          <div className="max-w-[60%]">
            <div className="truncate text-lg font-semibold tracking-tight text-white drop-shadow-sm">
              {title}
            </div>
            {Array.isArray(tags) && tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/15 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-right text-xs text-white/70">
          <span>Cybersecurity</span>
          <div className="mt-0.5">by D3c0d3r</div>
        </div>
      </div>
    </div>
  )
}