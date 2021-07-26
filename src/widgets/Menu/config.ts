// import iconHot from "../../assets/images/tag/icon-hot.svg"

export const MENU_HEIGHT = 84 // Header height
export const MENU_ENTRY_HEIGHT = 55 // Height of item
export const SIDEBAR_WIDTH_FULL = 210 // Width of sidebar
export const SIDEBAR_WIDTH_REDUCED = 0 // 56 Width of sidebar collapse mini only icon

/**
 * label: string
 * icon: svg
 * href: https || /path
 * calloutClass: 'rainbow' || className // className for item
 * initialOpenState: true || false
 * items: array sample parent
 * att: attach => text || icon.png
 */
export const links = [
  // {
  //   label: "POOLS",
  //   icon: "PoolIcon",
  //   href: "#",
  //   att: "SOON",
  //   initialOpenState: true,
  //   calloutClass: 'rainbow',
  // },
  {
    label: 'HOME',
    icon: 'HomeIcon',
    href: '/abc',
    calloutClass: 'rainbow',
  },
  {
    label: "Private Sale",
    icon: "SunIcon",
    href: "/",
    // calloutClass: 'rainbow',
    // target: '_blank'
  }
]

export const socials = [
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    items: [
      {
        label: 'English',
        href: 'https://t.me/pancakeswap',
      },
      {
        label: 'Bahasa Indonesia',
        href: 'https://t.me/PancakeSwapIndonesia',
      },
      {
        label: '中文',
        href: 'https://t.me/PancakeSwap_CN',
      },
      {
        label: 'Tiếng Việt',
        href: 'https://t.me/PancakeSwapVN',
      },
      {
        label: 'Italiano',
        href: 'https://t.me/pancakeswap_ita',
      },
      {
        label: 'русский',
        href: 'https://t.me/pancakeswap_ru',
      },
      {
        label: 'Türkiye',
        href: 'https://t.me/pancakeswapturkiye',
      },
      {
        label: 'Português',
        href: 'https://t.me/PancakeSwapPortuguese',
      },
      {
        label: 'Español',
        href: 'https://t.me/PancakeswapEs',
      },
      {
        label: '日本語',
        href: 'https://t.me/pancakeswapjp',
      },
      {
        label: 'Français',
        href: 'https://t.me/pancakeswapfr',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/PancakeSwapAnn',
      },
      {
        label: 'Whale Alert',
        href: 'https://t.me/PancakeSwapWhales',
      },
    ],
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/pancakeswap',
  },
]
