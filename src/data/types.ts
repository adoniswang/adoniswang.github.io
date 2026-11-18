/**
 * 頁面內容的型別。日後改由後端 API 提供時，
 * API 回應只要符合這些型別，元件就不需要改動。
 */
export interface Link {
  label: string;
  href: string;
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export interface Hero {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  primary: Link;
  secondary?: Link;
}

export type IconName = 'upload' | 'scan' | 'check' | 'export' | 'users' | 'shield';

export interface Feature {
  icon: IconName;
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
  cta?: Link;
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface LandingContent {
  hero: Hero;
  features: { head: SectionHeading; items: Feature[] };
  steps: { head: SectionHeading; items: Step[] };
  pricing: { head: SectionHeading; items: Plan[] };
  faq: { head: SectionHeading; items: FaqItem[] };
}
