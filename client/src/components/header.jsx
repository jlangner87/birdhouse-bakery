import hero from "../assets/hero.png"

function Header() {
  return (
    <div className="Header">
      <img src={hero} className="hero-img"/>
      <h1>Birdhouse Bakery</h1>
      <a className="enter-link" href="#top">ENTER</a>
    </div>
  )
}

export default Header