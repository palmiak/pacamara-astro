/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'tailblog-shadow': '0px 25px 50px -12px rgba(0, 0, 0, 0.3)',
			},
			fontFamily: {
				'tailblog-inter': ['"Inter"', 'sans-serif'],
				'tailblog-space': ['"Space Grotesk"', 'sans-serif'],
			},
			colors: {
				'tailblog-primary': '#4A4E69',
				'tailblog-secondary': '#9A8C98',
				'tailblog-accent': '#C9ADA7',
				'tailblog-dark': '#22223B',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
