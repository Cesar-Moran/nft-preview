/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
'./index.html'],
  theme: {
    extend: {},
    colors: {
      softBlue: '#8bacda',
      cyan: '#00fff7',
      veryDarkBlueMainBG: '#0d192b',
      veryDarkBlueCardBG: '#14253d',
      veryDarkBlueLine: '#2f415b',
      white: '#ffffff'
  },
  fontFamily: {
    outfit:'Outfit'
  },
  fontWeight: {
    light: '300',
    normal: '400',
    semibold: '600'
  }
  },
  plugins: [],
}