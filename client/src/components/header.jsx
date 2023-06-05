import hero from "../assets/hero.png"

function Header() {
  return (
    <div className="Header">
      <div className="title-container">
        <img src={hero} className="hero-img"/>
        <h1>Birdhouse Bakery</h1>
      </div>
    </div>
  )
}

export default Header