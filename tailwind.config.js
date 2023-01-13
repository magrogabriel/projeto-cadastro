/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        /^bg-/,
        /^to-/,
        /^from-/
    ],
    theme: {
        extend: {
            colors: {
                'main-blue': '#3f99f8',
            },
        },
    },
    plugins: [],
}