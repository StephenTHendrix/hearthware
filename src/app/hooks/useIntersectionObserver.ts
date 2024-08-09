import { RefObject, useEffect, useState } from 'react'

export const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  { threshold = 0.1, root = null, rootMargin = '0%' } = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), {
      threshold,
      root,
      rootMargin,
    })

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [elementRef, threshold, root, rootMargin])

  return isIntersecting
}
