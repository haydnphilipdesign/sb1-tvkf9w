/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary': '#333333',
                'secondary': '#ffffff',
                'gray-light': '#f5f5f5',
                'gray-medium': '#999999',
                'gray-dark': '#666666',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'serif': ['Merriweather', 'serif'],
            },
            fontSize: {
                'h1': '3.5rem',
                'h2': '2.5rem',
                'h3': '2rem',
            },
            boxShadow: {
                'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};