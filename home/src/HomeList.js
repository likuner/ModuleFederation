const HomeList = (num) => {
  let ul = document.createElement('ul')
  let df = document.createDocumentFragment()
  for (let i=0; i<num; i++) {
    let li = document.createElement('li')
    li.textContent = `item ****** ${i+1}`
    df.appendChild(li)
  }
  ul.appendChild(df)
  return ul
}

export default HomeList