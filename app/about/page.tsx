'use client'
import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function About() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-4 text-2xl font-medium">About Me</h2>
        <p className="mb-2 text-zinc-600 dark:text-zinc-400">
          • Xin chào, tôi là sinh viên CNTT với niềm đam mê với prompt, web và
          marketing.
        </p>
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          • Sở thích của tôi là thể thao và đọc sách.
        </p>
      </motion.section>
    </motion.main>
  )
}
