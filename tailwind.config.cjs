/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'tailblog-inter': ['"Inter"', 'sans-serif'],
				'tailblog-space': ['"Space Grotesk"', 'sans-serif'],
			},
			colors: {
				'tailblog-primary': '#27374D',
				'tailblog-secondary': '#9DB2BF',
				'tailblog-accent': '#526D82',
				'tailblog-dark': '#1B2736',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
