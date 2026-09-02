/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E3A8A", // Deep Navy
          light: "#3B82F6",
          dark: "#0F172A",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#2563EB", // Electric Blue
          light: "#60A5FA",
          cyan: "#06B6D4",
        },
        success: {
          DEFAULT: "#16A34A",
          light: "#22C55E",
          soft: "#DCFCE7",
        },
        warning: {
          DEFAULT: "#EAB308",
          soft: "#FEF9C3",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
        medical: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          accent: "#EFF6FF",
          border: "#E2E8F0",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(30, 58, 138, 0.08)',
        'card': '0 10px 30px -4px rgba(30, 58, 138, 0.12)',
        'glow': '0 0 25px rgba(37, 99, 235, 0.35)',
        'button': '0 4px 14px rgba(22, 163, 74, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
