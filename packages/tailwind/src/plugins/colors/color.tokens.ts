export const rootSystemColors = {
  // System Colors
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  // Intent Colors
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  tertiary: {
    DEFAULT: 'hsl(var(--tertiary))',
    foreground: 'hsl(var(--tertiary-foreground))',
  },
  informative: {
    DEFAULT: 'hsl(var(--informative))',
    foreground: 'hsl(var(--informative-foreground))',
  },
  positive: {
    DEFAULT: 'hsl(var(--positive))',
    foreground: 'hsl(var(--positive-foreground))',
  },
  cautionary: {
    DEFAULT: 'hsl(var(--cautionary))',
    foreground: 'hsl(var(--cautionary-foreground))',
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },
  chart: {
    '1': 'hsl(var(--chart-1))',
    '2': 'hsl(var(--chart-2))',
    '3': 'hsl(var(--chart-3))',
    '4': 'hsl(var(--chart-4))',
    '5': 'hsl(var(--chart-5))',
    '6': 'hsl(var(--chart-6))',
    '7': 'hsl(var(--chart-7))',
    '8': 'hsl(var(--chart-8))',
    '9': 'hsl(var(--chart-9))',
    '10': 'hsl(var(--chart-10))',
  },
  // Social Colors
  discord: {
    DEFAULT: 'hsl(var(--color-discord))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-discord) / 0.1)',
  },
  facebook: {
    DEFAULT: 'hsl(var(--color-facebook))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-facebook) / 0.1)',
  },
  github: {
    DEFAULT: 'hsl(var(--color-github))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-github) / 0.1)',
  },
  instagram: {
    DEFAULT: 'hsl(var(--color-instagram))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-instagram) / 0.1)',
  },
  linkedin: {
    DEFAULT: 'hsl(var(--color-linkedin))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-linkedin) / 0.1)',
  },
  telegram: {
    DEFAULT: 'hsl(var(--color-telegram))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-telegram) / 0.1)',
  },
  threads: {
    DEFAULT: 'hsl(var(--color-threads))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-threads) / 0.05)',
  },
  tiktok: {
    DEFAULT: 'hsl(var(--color-tiktok))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-tiktok) / 0.1)',
  },
  x: {
    DEFAULT: 'hsl(var(--color-x))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-x) / 0.05)',
  },
  youtube: {
    DEFAULT: 'hsl(var(--color-youtube))',
    foreground: 'hsl(var(--color-white))',
    background: 'hsl(var(--color-youtube) / 0.1)',
  },
  // Sidebar
  sidebar: {
    DEFAULT: 'hsl(var(--sidebar-background))',
    foreground: 'hsl(var(--sidebar-foreground))',
    border: 'hsl(var(--sidebar-border))',
    ring: 'hsl(var(--sidebar-ring))',
    primary: {
      DEFAULT: 'hsl(var(--sidebar-primary))',
      foreground: 'hsl(var(--sidebar-primary-foreground))',
    },
    accent: {
      DEFAULT: 'hsl(var(--sidebar-accent))',
      foreground: 'hsl(var(--sidebar-accent-foreground))',
    },
  },
  // Form
  form: {
    DEFAULT: 'hsl(var(--form-background))',
    foreground: 'hsl(var(--form-foreground))',
    border: 'hsl(var(--form-border))',
    ring: 'hsl(var(--form-ring))',
    primary: {
      DEFAULT: 'hsl(var(--form-primary))',
      foreground: 'hsl(var(--form-primary-foreground))',
    },
    accent: {
      DEFAULT: 'hsl(var(--form-accent))',
      foreground: 'hsl(var(--form-accent-foreground))',
    },
  },
} as const;

export type RootSystemColorKey = keyof typeof rootSystemColors;

export type RootIntentColorKey =
  | 'accent'
  | 'cautionary'
  | 'destructive'
  | 'informative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'tertiary';

export const rootIntentColors: RootIntentColorKey[] = [
  'accent',
  'primary',
  'secondary',
  'tertiary',
  'informative',
  'positive',
  'cautionary',
  'destructive',
];
