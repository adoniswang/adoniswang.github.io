import type { LandingContent } from './types';

/** 靜態內容（佔位文案），之後可整份改由 API 提供。 */
export const landing: LandingContent = {
  hero: {
    eyebrow: '現正開放搶先體驗',
    title: '把想法變成產品，',
    highlight: '快十倍。',
    subtitle:
      'Acme 把新創最花時間的基礎建設：帳號、金流、通知、數據，整合成一套開箱即用的平台，讓你的團隊專注在真正重要的事。',
    primary: { label: '加入候補名單', href: '#signup' },
    secondary: { label: '了解運作方式', href: '#how' },
  },
  features: [
    { icon: 'bolt', title: '幾分鐘就上線', body: '預先整合好的模組，省下從零搭建的數週工時。' },
    { icon: 'plug', title: 'API 優先', body: '所有功能都有 REST API，可以接進你現有的 PHP、Python 或 Node 後端。' },
    { icon: 'shield', title: '安全內建', body: '權限控管、稽核紀錄與資料加密都是預設開啟。' },
    { icon: 'chart', title: '即時數據', body: '用一個儀表板掌握註冊、留存與營收指標。' },
    { icon: 'users', title: '為團隊設計', body: '角色權限與協作流程，從兩人小隊到百人組織都適用。' },
    { icon: 'globe', title: '在地化支援', body: '多語系、多幣別與在地金流，一開始就準備好走向國際。' },
  ],
  steps: [
    { title: '建立專案', body: '註冊後選擇需要的模組，系統自動產生環境與金鑰。' },
    { title: '串接 API', body: '用你熟悉的語言呼叫 API，或直接嵌入現成的前端元件。' },
    { title: '上線成長', body: '部署後持續追蹤數據，依照回饋快速迭代。' },
  ],
  plans: [
    {
      name: '入門',
      price: '免費',
      description: '適合驗證想法的個人開發者。',
      features: ['1 個專案', '每月 1 萬次 API 呼叫', '社群支援'],
      cta: { label: '加入候補名單', href: '#signup' },
    },
    {
      name: '成長',
      price: 'NT$1,490',
      period: '/ 月',
      description: '適合開始有用戶的新創團隊。',
      features: ['10 個專案', '每月 100 萬次 API 呼叫', '團隊權限管理', 'Email 支援'],
      cta: { label: '加入候補名單', href: '#signup' },
      featured: true,
    },
    {
      name: '企業',
      price: '聯絡我們',
      description: '需要客製化與 SLA 的組織。',
      features: ['無限專案', '專屬部署選項', 'SLA 與資安審查', '專屬客戶經理'],
      cta: { label: '與我們聯絡', href: 'mailto:hello@example.com' },
    },
  ],
  faq: [
    { q: '什麼時候正式上線？', a: '我們正在與第一批合作團隊進行封閉測試，加入候補名單的用戶會最先收到邀請。' },
    { q: '可以搭配現有的後端嗎？', a: '可以。Acme 以 REST API 為核心，任何能發 HTTP 請求的語言都能串接。' },
    { q: '資料存放在哪裡？', a: '預設存放在亞洲區域的資料中心，企業方案可選擇其他區域或自行部署。' },
    { q: '隨時可以取消嗎？', a: '可以，沒有綁約。取消後仍可匯出你所有的資料。' },
  ],
};
