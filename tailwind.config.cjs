/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundSize: {
			'gradient-dashed': '20px 2px, 100% 2px',
		},
		extend: {
			boxShadow: {
				'tailblog-shadow': '0px 25px 50px -12px rgba(0, 0, 0, 0.3)',
			},
			fontFamily: {
				'tailblog-inter': ['"Inter"', 'sans-serif'],
				'tailblog-space': ['"Space Grotesk"', 'sans-serif'],
			},
			colors: {
				'tailblog-primary': '#003049',
				'tailblog-secondary': '#B2A4FF',
				'tailblog-accent': '#FFB4B4',
				'tailblog-dark': '#000E14',
				'tailblog-white': '#ffffff',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
