import hero from "../assets/hero.png"

function Header() {
  return (
    <div className="Header">
      <img src={hero} className="hero-img" alt="Decorative: A robin and pastries sit in front of a birdhouse"/>
      <h1>Birdhouse Bakery</h1>
      <a className="enter-link" href="#top">ENTER</a>
    </div>
  )
}

export default Header