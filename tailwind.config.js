/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'Light-Gray': 'hsl(212, 45%, 89%)',
				'Grayish-Blue': 'hsl(220, 15%, 55%)',
				'Dark-Blue': 'hsl(218, 44%, 22%)',
				'Thin-blue': 'hsl(228, 45%, 44%)'
			},
			fontFamily: {
				'Outfit': ['Outfit']
			}
		}
	},
	plugins: []
};
