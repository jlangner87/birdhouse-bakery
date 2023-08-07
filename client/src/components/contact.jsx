import Form from "./form"
import flourish from "../assets/flourishes/flourish2.png"

function Contact() {
  return (
    <div className="Section">
      <h1>Contact Birdhouse Bakery</h1>
      <h2>Let's work Together</h2>
      <img src={flourish} className="flourish" alt="decorative"/>
      <Form />
    </div>
  )
}

export default Contact