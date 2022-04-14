Promise.all([
  import('home/HomeList'),
  import('nav/Header')
]).then(([
  {default: HomeList},
  {default: Header}
]) => {
  document.body.appendChild(Header('Done!!'))
  document.body.appendChild(HomeList(10))
})