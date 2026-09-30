import type { IconType } from 'react-icons'
import { FaApple } from 'react-icons/fa'
import { BsAndroid2 } from 'react-icons/bs'
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from 'react-icons/sl'
import type { NavLink } from './navigation'

export type IconLink = NavLink & {
  icon: IconType
}

export const FOOTER_SITE_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Thesaurus', href: '#' },
  { label: 'Dictionary', href: '#' },
  { label: 'Antonyms', href: '#' },
  { label: 'Word Of Day', href: '#' },
  { label: 'Quiz', href: '#' },
]

export const FOOTER_INFO_LINKS: NavLink[] = [
  { label: 'About us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Contact us', href: '#' },
]

export const SOCIAL_LINKS: IconLink[] = [
  { label: 'Facebook', href: '#', icon: SlSocialFacebook },
  { label: 'Instagram', href: '#', icon: SlSocialInstagram },
  { label: 'YouTube', href: '#', icon: SlSocialYoutube },
  { label: 'Twitter', href: '#', icon: SlSocialTwitter },
]

export const FOOTER_APP_LINKS: IconLink[] = [
  { label: 'Get it on Google Play', href: '#', icon: BsAndroid2 },
  { label: 'Download on the App Store', href: '#', icon: FaApple },
]
