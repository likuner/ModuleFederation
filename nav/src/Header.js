const Header = (title = 'Header Content!') => {
  const header = document.createElement('h1')
  header.textContent = title
  return header
}

export default Header