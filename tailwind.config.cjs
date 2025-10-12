/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './components.json',
        './src/app/**/*.{ts,tsx,js,jsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
