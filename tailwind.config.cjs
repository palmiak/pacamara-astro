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
				'tailblog-primary': '#001C30',
				'tailblog-secondary': '#176B87',
				'tailblog-accent': '#64CCC5',
				'tailblog-dark': '#22223B',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
