/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Azeret Mono', 'monospace'], // Add Azeret Mono
			  },
			fontSize: {
				'140': '140px', // large size
			},
		},
	},
	plugins: [],
}
