import sample1 from "../assets/sample-1.png"
import sample2 from "../assets/sample-2.png"
import sample3 from "../assets/sample-3.png"
import sample4 from "../assets/sample-4.png"
import placeholder from "../assets/placeholder.png"

function Gallery() {
  return (
    <div className="Section">
      <h1>This is the Gallery section</h1>
      <h2>This is a heading</h2>
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
          <img src={placeholder}/>
        </div>
        <div className="gallery_card">
          <img src={placeholder}/>
        </div>
        <div className="gallery_card">
          <img src={placeholder}/>
        </div>
        <div className="gallery_card">
          <img src={placeholder}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery