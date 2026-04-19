import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			umbral: {
  				"bg-deep": "#05070C",
  				bg: "#0A0F1C",
  				surface: "#0F172A",
  				border: "#1E293B",
  				cyan: "#00E5FF",
  				"cyan-soft": "#22D3EE",
  				blue: "#3B82F6",
  				"blue-deep": "#1D4ED8",
  				amber: "#F59E0B",
  				text: "#F8FAFC",
  				"text-muted": "#CBD5E1",
  				"text-dim": "#64748B",
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			violet: {
  				'50': '#f5f3ff',
  				'100': '#ede9fe',
  				'200': '#ddd6fe',
  				'300': '#c4b5fd',
  				'400': '#a78bfa',
  				'500': '#8b5cf6',
  				'600': '#7c3aed',
  				'700': '#6d28d9',
  				'800': '#5b21b6',
  				'900': '#4c1d95',
  				'950': '#2e1065'
  			},
  			cyan: {
  				'50': '#ecfeff',
  				'100': '#cffafe',
  				'200': '#a5f3fc',
  				'300': '#67e8f9',
  				'400': '#22d3ee',
  				'500': '#06b6d4',
  				'600': '#0891b2',
  				'700': '#0e7490',
  				'800': '#155e75',
  				'900': '#164e63',
  				'950': '#083344'
  			},
  			success: '#10B981',
  			surface: {
  				'600': '#27272A',
  				'700': '#1F1F23',
  				'800': '#18181B',
  				'900': '#111113',
  				'950': '#0A0A0B'
  			}
  		},
  		fontFamily: {
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
  			mono: ['var(--font-mono)', 'monospace'],
  		},
  		boxShadow: {
  			"glow-cyan": "0 0 24px rgba(0, 229, 255, 0.35)",
  			"glow-cyan-lg": "0 0 40px rgba(0, 229, 255, 0.5)",
  			"glow-blue": "0 0 24px rgba(59, 130, 246, 0.35)",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139, 92, 246, 0.3), transparent 70%)',
  			'violet-cyan': 'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)',
  			'card-glow': 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139, 92, 246, 0.06), transparent)',
  			'grid-pattern': 'linear-gradient(to right, #1F1F23 1px, transparent 1px), linear-gradient(to bottom, #1F1F23 1px, transparent 1px)',
  			'dot-pattern': 'radial-gradient(circle, #1F1F23 1px, transparent 1px)'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.6s ease-out forwards',
  			'slide-up': 'slideUp 0.7s ease-out forwards',
  			'gradient-shift': 'gradientShift 8s ease infinite',
  			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'counter': 'counter 2s ease-out forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(32px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			gradientShift: {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
