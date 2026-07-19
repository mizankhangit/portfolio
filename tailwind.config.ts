import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        slate: {
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
      },
      borderRadius: {
        '4': '4px',
        '6': '6px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
      },
      boxShadow: {
        'blue-sm': '0 4px 14px rgba(37, 99, 235, 0.25)',
        'blue-md': '0 8px 30px rgba(37, 99, 235, 0.35)',
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
export default config
