import { landing } from '@/data/landing';
import type { LandingContent } from '@/data/types';

/**
 * 取得首頁內容。build 時在 Node 端執行，結果會寫進靜態 HTML。
 *
 * 目前直接回傳靜態資料。要改由後端提供時：
 *
 *   if (isApiEnabled()) {
 *     try {
 *       return await apiFetch<LandingContent>('/landing');
 *     } catch (err) {
 *       console.warn('[content] API 失敗，改用靜態內容', err);
 *     }
 *   }
 *
 * 內容更新後需要重新 build（例如由後端觸發 GitHub Actions 的 workflow_dispatch）。
 * 需要即時資料的區塊則改在瀏覽器端 <script> 中呼叫 apiFetch。
 */
export async function getLandingContent(): Promise<LandingContent> {
  return landing;
}
