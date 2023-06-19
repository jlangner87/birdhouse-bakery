import sample1 from "../assets/sample-1.png"
import sample2 from "../assets/sample-2.png"
import sample3 from "../assets/sample-3.png"
import sample4 from "../assets/sample-4.png"
import sample5 from "../assets/sample-5.png"
import sample6 from "../assets/sample-6.png"
import sample7 from "../assets/sample-7.png"
import sample8 from "../assets/sample-8.png"
import sample9 from "../assets/sample-9.png"
import sample10 from "../assets/sample-10.png"
import placeholder from "../assets/placeholder.png"

function Gallery() {
  return (
    <div className="Section" id="alternate">
      <h1>Creations from Birdhouse Bakery</h1>
      <h2>A gallery of edible artistry</h2>
      <div className="gallery_container">
        <div className="gallery_card">
          <img src={sample1}/>
        </div>
        <div className="gallery_card">
          <img src={sample2}/>
        </div>
        <div className="gallery_card">
          <img src={sample3}/>
        </div>
        <div className="gallery_card">
          <img src={sample4}/>
        </div>
        <div className="gallery_card">
          <img src={sample5}/>
        </div>
        <div className="gallery_card">
          <img src={sample6}/>
        </div>
        <div className="gallery_card">
          <img src={sample7}/>
        </div>
        <div className="gallery_card">
          <img src={sample8}/>
        </div>
        <div className="gallery_card">
          <img src={sample9}/>
        </div>
        <div className="gallery_card">
          <img src={sample10}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery