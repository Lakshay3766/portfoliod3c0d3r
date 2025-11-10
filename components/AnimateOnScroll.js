import { useEffect, useRef } from 'react'

export default function AnimateOnScroll({ children, animation = 'fade-up', duration = 600, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('aos-in')
            observer.unobserve(el)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <div ref={ref} className={`aos ${className}`} data-animation={animation} style={style}>
      {children}
    </div>
  )
}