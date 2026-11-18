/**
 * 頁面內容的型別。日後改由後端 API 提供時，
 * API 回應只要符合這些型別，元件就不需要改動。
 */
export interface Hero {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

export interface Feature {
  icon: 'bolt' | 'shield' | 'chart' | 'plug' | 'users' | 'globe';
  title: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface LandingContent {
  hero: Hero;
  features: Feature[];
  steps: Step[];
  plans: Plan[];
  faq: FaqItem[];
}
