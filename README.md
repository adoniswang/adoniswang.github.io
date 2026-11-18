# adoniswang.github.io

Filo 官網：記帳士事務所的 AI 單據整理服務，以 [Astro](https://astro.build) 建置，部署在 GitHub Pages。

## 開發

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 輸出到 dist/
```

## 串接後端 API

複製 `.env.example` 為 `.env`，並設定 `PUBLIC_API_BASE_URL`。未設定時網站以純靜態模式運作。
部署時在 GitHub repo 的 **Settings → Secrets and variables → Actions → Variables** 新增同名變數。

## 部署

**Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**；之後 push 到 `main` 就會自動部署。
