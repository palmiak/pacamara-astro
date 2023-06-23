/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'tailblog-sans-serif': ['"Inter"', 'sans-serif'],
				'tailblog-serif': ['"Spectral"', 'serif'],
			},
			colors: {
				'tailblog-blue': '#0096FF',
				'tailblog-purple': '#40128B',
				'tailblog-pink': '#D800A6',
				'tailblog-orange': '#ff7849',
				'tailblog-green': '#BCEB3C',
				'tailblog-yellow': '#FFE79B',
				'tailblog-grey-dark': '#212A3E',
				'tailblog-grey': '#394867',
				'tailblog-grey-light': '#DDE6ED',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
