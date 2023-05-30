import headshot from "../assets/headshot.png"
function About() {
  return (
    <div className="Section">
      <h1>This is the about section</h1>
      <h2>This is a heading</h2>
      <p>This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. </p>
      <h2>This is a heading</h2>
      <p>This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. </p>
      <img src={headshot} id="headshot"/>
    </div>
  )
}

export default About