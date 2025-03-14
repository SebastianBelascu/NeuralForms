export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

export const PricingTier: Tier[] = [
  {
    name: 'Starter',
    id: 'starter',
    icon: '/assets/icons/price-tiers/free-icon.svg',
    description: 'Perfect for individuals and small teams getting started with AI-powered design.',
    features: [
      '2 AI-powered workspaces',
      'Basic design templates',
      'Export to PNG and SVG',
      'Community support',
      '5 GB storage',
      'Basic analytics',
    ],
    featured: false,
    priceId: { month: 'pri_01hsxyh9txq4rzbrhbyngkhy46', year: 'pri_01hsxyh9txq4rzbrhbyngkhy46' },
  },
  {
    name: 'Pro',
    id: 'pro',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    description: 'Ideal for growing teams that need advanced AI features and collaboration tools.',
    features: [
      'Unlimited AI workspaces',
      'Advanced AI design tools',
      'Custom templates library',
      'Priority support',
      '50 GB storage',
      'Advanced analytics',
      'API access',
      'Everything in Starter',
    ],
    featured: true,
    priceId: { month: 'pri_01hsxycme6m95sejkz7sbz5e9g', year: 'pri_01hsxyeb2bmrg618bzwcwvdd6q' },
  },
  {
    name: 'Enterprise',
    id: 'advanced',
    icon: '/assets/icons/price-tiers/pro-icon.svg',
    description: 'Custom solutions for large organizations requiring maximum security and control.',
    features: [
      'Unlimited everything',
      'Custom AI model training',
      'Single sign-on (SSO)',
      'Dedicated success manager',
      'Custom security controls',
      'SLA guarantees',
      'Priority feature requests',
      'Everything in Pro',
    ],
    featured: false,
    priceId: { month: 'pri_01hsxyff091kyc9rjzx7zm6yqh', year: 'pri_01hsxyfysbzf90tkh2wqbfxwa5' },
  },
];
