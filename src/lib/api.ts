/**
 * 輕量的後端 API 客戶端，build 時（Node）與瀏覽器端都能用。
 *
 * - 位址來自 PUBLIC_API_BASE_URL；未設定時 isApiEnabled() 回傳 false，
 *   呼叫端應改用靜態備援。
 * - PUBLIC_ 前綴的變數會被打包進前端，不要放任何密鑰。
 * - 後端需允許 https://adoniswang.github.io 的 CORS 請求。
 */

const BASE_URL = (import.meta.env.PUBLIC_API_BASE_URL ?? '').replace(/\/+$/, '');
const DEFAULT_TIMEOUT_MS = 8000;

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly body?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function isApiEnabled(): boolean {
  return BASE_URL.length > 0;
}

interface RequestOptions extends Omit<RequestInit, 'body'> {
  /** 會被 JSON.stringify 的請求內容 */
  json?: unknown;
  timeoutMs?: number;
}

export async function apiFetch<T>(path: string, options: RequestOptions = {}): Promise<T> {
  if (!isApiEnabled()) {
    throw new ApiError('PUBLIC_API_BASE_URL 未設定', 0);
  }

  const { json, timeoutMs = DEFAULT_TIMEOUT_MS, headers, ...init } = options;
  const url = `${BASE_URL}/${path.replace(/^\/+/, '')}`;

  const finalHeaders = new Headers(headers);
  if (!finalHeaders.has('Accept')) finalHeaders.set('Accept', 'application/json');
  if (json !== undefined && !finalHeaders.has('Content-Type')) {
    finalHeaders.set('Content-Type', 'application/json');
  }

  const res = await fetch(url, {
    ...init,
    headers: finalHeaders,
    body: json !== undefined ? JSON.stringify(json) : undefined,
    signal: init.signal ?? AbortSignal.timeout(timeoutMs),
  });

  const text = await res.text();
  let data: unknown = undefined;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!res.ok) {
    const message =
      (data && typeof data === 'object' && 'message' in data && typeof data.message === 'string'
        ? data.message
        : undefined) ?? `HTTP ${res.status}`;
    throw new ApiError(message, res.status, data);
  }

  return data as T;
}
