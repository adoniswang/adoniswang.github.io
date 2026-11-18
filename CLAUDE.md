# CLAUDE.md

Filo 官網（記帳士事務所的 AI 單據整理服務），Astro 靜態網站，透過 GitHub Pages 發布。

## 指令

- `npm run dev`：開發伺服器（http://localhost:4321）
- `npm run build`：型別檢查（`astro check`）+ 輸出到 `dist/`
- `npm run preview`：預覽 build 結果

Node 版本見 `.nvmrc`（Astro 7 需要 Node >= 22.23.4）。

## 結構

- `src/config/site.ts`：品牌名稱、導覽、聯絡方式
- `src/data/`：頁面內容（`landing.ts`）與型別（`types.ts`）
- `src/lib/content.ts`：build 時取得內容的唯一入口，日後改從 API 取資料只改這裡
- `src/lib/api.ts`：`apiFetch` / `isApiEnabled`，build 時與瀏覽器端共用
- `src/components/`：每個區塊一個元件；`SubscribeForm.astro` 是瀏覽器端呼叫 API 的範例
- `public/`：原樣複製的靜態檔
- `.github/workflows/deploy.yml`：push 到 `main` 時 build 並部署 Pages

## API 整合

- 後端位址：環境變數 `PUBLIC_API_BASE_URL`（本機用 `.env`，CI 用 repo Actions Variables）
- 未設定時是純靜態模式，表單改用 mailto 備援
- `PUBLIC_` 變數會打包進前端，不可放密鑰；後端需允許本站的 CORS
- 目前的端點約定：`POST /subscribers`，body 是 `{ email, source }`

## 慣例

- 內容使用繁體中文；文案改 `src/data/`，不要寫死在元件裡
- 樣式：全域 token 放在 `src/styles/global.css`（CSS 變數，支援暗色模式），元件用 scoped `<style>`
- 目前不引入 UI 框架；需要複雜互動時再加 `@astrojs/react` 等 island 整合
- 新增依賴前先確認

## 分支

- `develop`：日常開發
- `main`：正式發布（push 會觸發部署），由 `develop` 合併進來
