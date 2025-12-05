import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface UseCaseProps {
  title: string;
  description: string;
  icon: LucideIcon;
}