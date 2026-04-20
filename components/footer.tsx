import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      // { label: 'Download', href: '/download' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Resources',
    links: [
      // { label: 'Documentation', href: '/documentation' },
      // { label: 'Blog', href: '/blog' },
      // { label: 'Community', href: '/community' },
      { label: 'Support', href: 'https://github.com/Relwave/relwave-app/issues/new' },
    ],
  },
  {
    title: 'Company',
    links: [
      // { label: 'About', href: '/about' },
      // { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      // { label: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'License', href: 'https://github.com/Relwave/relwave-app/blob/master/LICENSE' },
    ],
  },
]

const socialLinks = [
  { icon: GithubIcon, href: 'http://github.com/Relwave', label: 'GitHub' },
]

export const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Top Section - Logo and Description */}
        <div className='mb-8 grid gap-8 md:grid-cols-5'>
          <div className='md:col-span-1'>
            <a href='#' className='flex items-center gap-2'>
              <Image src='/icon.png' alt='Logo' width={32} height={32} className='rounded-sm' />
              <span className='font-semibold text-lg'>RelWave</span>
            </a>
            <p className='mt-2 text-sm text-muted-foreground'>
              Modern database management and visualization for everyone.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className='font-semibold text-sm mb-3'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className='text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className='my-8' />

        {/* Bottom Section - Copyright and Social */}
        <div className='flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-xs text-muted-foreground text-center sm:text-left'>
            {`© ${new Date().getFullYear()} RelWave. All rights reserved. Made with ❤️ for better workflows.`}
          </p>

          {/* Social Links */}
          <div className='flex justify-center gap-4 sm:justify-end'>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className='text-muted-foreground transition-colors duration-200 hover:text-foreground'
                >
                  <Icon className='h-5 w-5' />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}