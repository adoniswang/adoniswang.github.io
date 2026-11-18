/**
 * 全站設定：品牌、導覽、聯絡方式。
 * 「Acme」是佔位名稱，換成你的新創名稱即可。
 */
export const site = {
  name: 'Acme',
  title: 'Acme｜讓團隊更快把想法變成產品',
  description: 'Acme 協助新創團隊用更少的工程時間，完成驗證、上線與成長。',
  locale: 'zh-Hant',
  ogLocale: 'zh_TW',
  contactEmail: 'hello@example.com',
  nav: [
    { label: '功能', href: '#features' },
    { label: '運作方式', href: '#how' },
    { label: '方案', href: '#pricing' },
    { label: '常見問題', href: '#faq' },
  ],
  cta: { label: '搶先體驗', href: '#signup' },
  social: [
    { label: 'GitHub', href: 'https://github.com/adoniswang' },
  ],
} as const;

export type SiteConfig = typeof site;
