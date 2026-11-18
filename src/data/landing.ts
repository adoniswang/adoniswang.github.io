import { site } from '@/config/site';
import type { LandingContent } from './types';

/**
 * 首頁內容（草稿文案）。價格、額度與功能範圍都還是規劃中的數字，
 * 上線前請依實際產品調整；之後可整份改由 API 提供。
 */
export const landing: LandingContent = {
  hero: {
    eyebrow: '記帳士事務所搶先試用中',
    title: '客戶的收據，',
    highlight: '交給 Filo 整理。',
    subtitle:
      '客戶用 LINE 或網頁上傳收據、發票與對帳單，Filo 用 AI 自動辨識日期、金額、統編與科目。你只要確認，就能匯出到慣用的會計軟體。',
    primary: { label: '申請試用', href: '#signup' },
    secondary: { label: '看看怎麼運作', href: '#how' },
  },
  features: {
    head: {
      eyebrow: '功能',
      title: '把登打的時間，還給事務所',
      subtitle: '從收件、辨識到匯出，一條流程完成，不必再一張張手動輸入。',
    },
    items: [
      {
        icon: 'upload',
        title: '客戶隨手上傳',
        body: '客戶透過 LINE 或網頁拍照上傳，不用安裝 App，也不必改變原本的習慣。',
      },
      {
        icon: 'scan',
        title: 'AI 自動辨識',
        body: '自動讀出日期、金額、統一編號、稅額，並依過往紀錄建議會計科目。',
      },
      {
        icon: 'check',
        title: '人工確認把關',
        body: '辨識結果標示信心程度，有疑慮的欄位會特別提醒，確認後才入帳。',
      },
      {
        icon: 'export',
        title: '一鍵匯出',
        body: '依你使用的會計軟體輸出 Excel 或 CSV 匯入格式，直接接上現有作業。',
      },
      {
        icon: 'users',
        title: '多客戶管理',
        body: '依客戶與月份分類單據，進度一目了然，同仁之間可以分工處理。',
      },
      {
        icon: 'shield',
        title: '資料安全',
        body: '傳輸與儲存全程加密，權限依客戶隔離，原始檔案可隨時匯出或刪除。',
      },
    ],
  },
  steps: {
    head: {
      eyebrow: '運作方式',
      title: '三個步驟，月結不再加班',
      subtitle: '不用更換會計軟體，Filo 接在你現有的流程前面。',
    },
    items: [
      {
        title: '邀請客戶',
        body: '建立客戶後產生專屬的 LINE 或網頁上傳連結，傳給客戶即可開始收件。',
      },
      {
        title: '確認辨識結果',
        body: '單據進來後 AI 立即辨識，你在清單中快速檢查、修正並核准。',
      },
      {
        title: '匯出入帳',
        body: '依月份或客戶匯出，匯入會計軟體完成記帳。',
      },
    ],
  },
  pricing: {
    head: {
      eyebrow: '方案',
      title: '依事務所規模選擇',
      subtitle: '搶先試用期間，首批事務所可享有優惠價格。',
    },
    items: [
      {
        name: '試用',
        price: '免費',
        period: '/ 首月',
        description: '先用實際單據評估辨識品質。',
        features: ['最多 5 位客戶', '每月 200 張單據', 'Excel / CSV 匯出'],
        cta: { label: '申請試用', href: '#signup' },
      },
      {
        name: '標準',
        price: 'NT$1,990',
        period: '/ 月',
        description: '適合中小型記帳士事務所。',
        features: ['客戶數不限', '每月 1,000 張單據', '3 位同仁帳號', 'LINE 上傳通道', 'Email 支援'],
        cta: { label: '申請試用', href: '#signup' },
        featured: true,
      },
      {
        name: '進階',
        price: '聯絡我們',
        description: '單據量大或需要客製匯出格式的事務所。',
        features: ['單據量依需求', '同仁帳號不限', '客製匯出格式', '專人導入協助'],
        cta: { label: '與我們聯絡', href: `mailto:${site.contactEmail}` },
      },
    ],
  },
  faq: {
    head: { eyebrow: '常見問題', title: '還有疑問嗎？' },
    items: [
      {
        q: '支援哪些單據？',
        a: '目前以電子發票證明聯、傳統發票、收據與銀行對帳單為主，其他類型可以在試用時告訴我們。',
      },
      {
        q: 'AI 辨識錯了怎麼辦？',
        a: '每筆辨識結果都需要經過你確認才會匯出；信心度較低的欄位會特別標示，修正後系統也會學習你的習慣。',
      },
      {
        q: '可以搭配我現在用的會計軟體嗎？',
        a: 'Filo 不取代你的會計軟體，而是輸出它能匯入的格式。試用時告訴我們你使用的軟體，我們會協助設定匯出欄位。',
      },
      {
        q: '我的客戶需要學新的工具嗎？',
        a: '不需要。客戶只要點開你傳的連結，或在 LINE 上傳照片就可以，不必註冊帳號。',
      },
      {
        q: '客戶資料安全嗎？',
        a: '資料在傳輸與儲存時都會加密，不同客戶的資料互相隔離，也不會拿來訓練任何公開的 AI 模型。',
      },
    ],
  },
  signup: {
    title: '申請 Filo 搶先試用',
    body: '留下 Email，我們會與你聯絡，安排用你的實際單據試跑一次。',
    button: '申請試用',
    success: '已收到！我們會在 2 個工作天內與你聯絡。',
  },
};
