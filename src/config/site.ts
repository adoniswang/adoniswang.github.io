/**
 * 全站設定：品牌、導覽、聯絡方式。
 */
export const site = {
  name: 'Filo',
  title: 'Filo｜記帳士事務所的 AI 單據整理助理',
  description:
    'Filo 用 AI 自動辨識收據、發票與對帳單，整理成可直接匯入會計軟體的資料，讓事務所把時間留給更有價值的工作。',
  locale: 'zh-Hant',
  ogLocale: 'zh_TW',
  // TODO: 換成正式的聯絡信箱
  contactEmail: 'hello@example.com',
  nav: [
    { label: '功能', href: '#features' },
    { label: '運作方式', href: '#how' },
    { label: '方案', href: '#pricing' },
    { label: '常見問題', href: '#faq' },
  ],
  cta: { label: '申請試用', href: '#signup' },
  social: [{ label: 'GitHub', href: 'https://github.com/adoniswang' }],
} as const;

export type SiteConfig = typeof site;
