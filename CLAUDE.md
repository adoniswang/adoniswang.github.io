# CLAUDE.md

Adonis Wang 的個人網站，透過 GitHub Pages 發布。

## 結構

- `docs/`：網站根目錄（GitHub Pages 從此發布），目前只有 `index.html`
- 純靜態 HTML/CSS/JS，沒有建置流程、套件或測試

## 慣例

- 頁面內容使用繁體中文（`lang="zh-Hant"`）
- 保持零依賴；新增框架或建置工具前先確認
- 本機預覽：`python3 -m http.server -d docs 8000`

## 分支

- `develop`：日常開發
- `main`：正式發布，由 `develop` 合併進來
