import generateRandomQuote from './generateRandomQuote'
import './styles/main.scss'
import './assets/webpack.png'

const webpackImg = document.getElementById('webpackImg')
webpackImg.src = 'webpack.png'

generateRandomQuote()
