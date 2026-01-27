'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { useState } from 'react'
import { WORK_EXPERIENCE } from './data'

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
  const [contentMode, setContentMode] = useState<'bio' | 'internship'>('bio')

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
        key={contentMode}
        initial="hidden"
        animate="visible"
      >
        {contentMode === 'bio' ? (
          <div className="flex-1">
            <p className="mb-2 text-zinc-600 dark:text-zinc-400">
              • Xin chào, đây là trang web cá nhân của tôi.
            </p>
            <p className="mb-2 text-zinc-600 dark:text-zinc-400">
              • Tôi là sinh viên Công nghệ Thông tin, định hướng phát triển theo lĩnh vực QA/QC, với mục tiêu đảm bảo chất lượng sản phẩm thông qua tư duy kiểm thử, phân tích và cải tiến liên tục.
            </p>
            <p className="mb-2 text-zinc-600 dark:text-zinc-400">
              • Bên cạnh kiến thức nền tảng về CNTT, tôi quan tâm đến việc ứng dụng AI (đặc biệt là các mô hình ngôn ngữ lớn – LLMs) và các yếu tố liên quan đến SEO / Ads để hiểu rõ hơn hành vi người dùng và bối cảnh kinh doanh của sản phẩm.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              • Mục tiêu của tôi là sử dụng công nghệ và dữ liệu để phát hiện vấn đề sớm, nâng cao chất lượng sản phẩm và tạo ra giá trị thực tế cho doanh nghiệp.
            </p>
          </div>
        ) : (
          <div className="flex-1">
            <h3 className="mb-4 text-xl font-bold tracking-wide text-zinc-900 dark:text-zinc-100">
              TÓM TẮT QUÁ TRÌNH THỰC TẬP
            </h3>
            <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <p>• Nghiên cứu và xây dựng prompt cho các mô hình AI phục vụ tạo nội dung và hỗ trợ công việc nội bộ.</p>
              <p>• Thử nghiệm, đánh giá và tối ưu prompt nhằm cải thiện sự chính xác và tính nhất quán của đầu ra.</p>
              <p>• Phối hợp với team để chuẩn hóa cách sử dụng AI trong quy trình làm việc.</p>
              <p className="font-medium text-zinc-900 dark:text-zinc-100 mt-4">
                • Thành tựu: Góp phần cải thiện chất lượng đầu ra của AI, giảm thời gian chỉnh sửa thủ công, Xây dựng bộ prompt mẫu phục vụ sử dụng nội bộ.
              </p>
              <button
                onClick={() => setContentMode('bio')}
                className="mt-6 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                ← Quay lại giới thiệu
              </button>
            </div>
          </div>
        )}
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
            <div
              className="relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={job.id}
              onClick={() => {
                if (job.title === 'Intern Prompt AI') {
                  setContentMode('internship')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
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
            </div>
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
          <Magnetic intensity={0.2} springOptions={{ stiffness: 26.7, damping: 4.1, mass: 0.2 }}>
            <a
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 overflow-hidden transition-transform duration-300 hover:scale-105"
              href="/Hoang_Tuan_Anh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent" />
              <span className="relative font-semibold">View CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </Magnetic>
        </div>
      </motion.section>
    </motion.main>
  )
}
