import devLogo from "../assets/logo_name_black.png"
import footerLogo from "../assets/hero.png"

function Footer() {
  return (
    <div className="Footer">
      <div className="f-element">
        <h3 id="f-contact">Contact</h3>
        <h5>Robin Kruse</h5>
        <h5>birdhousebakery.rk@gmail.com</h5>
        <h5>(691)241-5289</h5>
      </div>
      <div className="f-element">
        <img className="f-hero" src={footerLogo} alt="Logo: Birdhouse Bakery" />
        <p className="f-title">Birdhouse Bakery</p>
      </div>
      <div className="f-element">
        <h3>Web Development by:</h3>
        <img className="dev-logo" src={devLogo} alt="Logo: Joshua Langner" />  
        <p className="copyright">Copyright © 2023 Joshua Langner WebDev, LLC</p>
        <a href="https://joshua-langner.com">www.joshua-langner.com</a>
      </div>

    </div>
  )
}

export default Footer