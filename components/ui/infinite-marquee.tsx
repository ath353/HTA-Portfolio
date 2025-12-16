'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

export function InfiniteMarquee({
  children,
  className,
  direction = 'left',
  speed = 20,
}: {
  children: React.ReactNode
  className?: string
  direction?: 'left' | 'right'
  speed?: number
}) {
  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)}>
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4">{children}</div>
      </motion.div>
    </div>
  )
}
