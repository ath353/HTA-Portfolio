import React from 'react'

type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Chat Bot Mini',
    description:
      'A simple chat bot application.',
    link: 'https://pro.motion-primitives.com/',
    image: '/images/chatbot-ai.jpg',
    id: 'project1',
  },
  {
    name: 'AI Agent',
    description: 'An intelligent AI agent system.',
    link: 'https://motion-primitives.com/',
    image: '/images/ai_agent_update.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Công ty cổ phần DEHA Việt Nam',
    title: 'Intern Prompt AI',
    start: '12/2025',
    end: '2/2026',
    link: 'https://ibelick.com',
    id: 'work1',
  },

]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'tuanahoang030503@gmail.com'

export const HARD_SKILLS = [
  'Wordpress',
  'Python',
  'Linux',
  'Prompt AI',
  'Seo',
  'Ads',
]

export const SOFT_SKILLS = [
  'Communication',
  'Teamwork',
  'Adaptability',
  'Careful',
  'Time Management',
]

