import React, { useEffect, useState } from 'react'

interface ParallaxSectionProps {
  imageUrl: string
  height: string
  children: React.ReactNode
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ imageUrl, height, children }) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`relative overflow-hidden ${height}`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  )
}

