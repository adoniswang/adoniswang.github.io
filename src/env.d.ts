interface ImportMetaEnv {
  /** 後端 API 位址，例如 https://api.example.com/v1；留空代表尚未接後端 */
  readonly PUBLIC_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
