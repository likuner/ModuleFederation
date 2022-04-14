import HomeList from './HomeList'

import('nav/Header').then(({ default: Header }) => {
  document.body.appendChild(Header('Hello, I am Header!!'))
  document.body.appendChild(HomeList(5))
})