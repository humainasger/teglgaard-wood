import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: string
  className?: string
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 800,
  distance = '30px',
  className = ''
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasRevealed = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed.current) {
          hasRevealed.current = true
          
          setTimeout(() => {
            element.classList.add('visible')
          }, delay)
          
          observer.disconnect()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div 
      ref={elementRef}
      className={`reveal ${className}`}
      style={{
        '--reveal-distance': distance,
        '--reveal-duration': `${duration}ms`
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
