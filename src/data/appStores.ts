import type { IconType } from 'react-icons'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export type StoreBadge = {
  caption: string
  name: string
  href: string
  icon: IconType
}

export const STORE_BADGES: StoreBadge[] = [
  {
    caption: 'GET IT ON',
    name: 'Google play',
    href: '#',
    icon: FaGooglePlay,
  },
  {
    caption: 'Download on the',
    name: 'App Store',
    href: '#',
    icon: FaApple,
  },
]
