import logo from "../assets/hero.png"

function Header() {
  return (
    <div className="Header">
      <img src={logo} id="header_logo"/>
      <h1>Birdhouse Bakery</h1>
    </div>
  )
}

export default Header