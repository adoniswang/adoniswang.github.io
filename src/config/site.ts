/**
 * 全站設定：品牌、導覽、社群連結。
 */
export const site = {
  name: 'Filo',
  title: 'Filo｜記帳士事務所的 AI 單據整理助理',
  description:
    'Filo 用 AI 自動辨識收據、發票與對帳單，整理成可直接匯入會計軟體的資料，讓事務所把時間留給更有價值的工作。',
  locale: 'zh-Hant',
  ogLocale: 'zh_TW',
  nav: [
    { label: '功能', href: '#features' },
    { label: '運作方式', href: '#how' },
    { label: '方案', href: '#pricing' },
    { label: '常見問題', href: '#faq' },
  ],
  social: [{ label: 'GitHub', href: 'https://github.com/adoniswang' }],
} as const;

export type SiteConfig = typeof site;
