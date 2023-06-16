/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'body-pattern': "url('/images/bg.jpg')"
			}
		}
	},
	plugins: []
};
