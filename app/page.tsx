'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { InfiniteMarquee } from '@/components/ui/infinite-marquee'

import { WORK_EXPERIENCE, EMAIL, HARD_SKILLS, SOFT_SKILLS } from './data'

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

export default function Personal() {
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
        <div className="flex-1">
          <p className="mb-2 text-zinc-600 dark:text-zinc-400">
            • Xin chào, đây là trang web cá nhân của tôi.
          </p>
          <p className="mb-2 text-zinc-600 dark:text-zinc-400">
            • Là 1 sinh viên CNTT, với đam mê xây dựng cầu nối giữa Công nghệ và Marketing, tôi tập trung vào 3 trụ cột chính: Khai thác sức mạnh của các mô hình ngôn ngữ lớn (LLMs), tối ưu hiển thị với SEO, chuyển đổi với Ads.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            • Mục tiêu của tôi là biến dữ liệu và công nghệ thành lợi thế cạnh tranh.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 border-b border-zinc-200 pb-2 text-xl font-bold tracking-wide dark:border-zinc-800">
          SKILLS
        </h3>
        <div className="mb-6">
          <h4 className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100">Hard Skills</h4>
          <InfiniteMarquee speed={30} direction="right" className="py-2">
            {HARD_SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-lg font-bold text-zinc-400 dark:text-zinc-500"
              >
                {skill} •
              </span>
            ))}
          </InfiniteMarquee>
        </div>

        <div>
          <h4 className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100">Soft Skills</h4>
          <InfiniteMarquee speed={30} className="py-2">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-lg font-bold text-zinc-400 dark:text-zinc-500"
              >
                {skill} •
              </span>
            ))}
          </InfiniteMarquee>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 border-b border-zinc-200 pb-2 text-xl font-bold tracking-wide dark:border-zinc-800">
          WORK EXPERIENCE
        </h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-6 border-b border-zinc-200 pb-2 text-xl font-bold tracking-wide dark:border-zinc-800">
          CV
        </h3>
        <div className="flex flex-wrap gap-2">
          <a
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </motion.section>
    </motion.main>
  )
}
