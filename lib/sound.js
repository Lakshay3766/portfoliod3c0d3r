export const createSound = (src) => {
  if (typeof window === 'undefined') {
    return () => {} // no-op on server
  }
  try {
    const audio = new Audio(src)
    audio.preload = 'auto'
    return () => {
      try {
        audio.currentTime = 0
        audio.play().catch(() => {})
      } catch (e) {
        // swallow errors to avoid breaking UI
      }
    }
  } catch (e) {
    return () => {}
  }
}