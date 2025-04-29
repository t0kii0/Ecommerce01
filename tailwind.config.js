/** @type {import('@tailwindcss').config} */
export default{
    contet: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container:{
                center: true,
                paffin: '1rem',
            },

            fontFamily: {
                monserrat: ['Montserrat', 'sans-serif']
            }
        },
    },
    plugin: [],
};