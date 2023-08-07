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
import sample11 from "../assets/sample-11.png"
import sample12 from "../assets/sample-12.png"
import flourish from "../assets/flourishes/flourish3.png"

function Gallery() {
  return (
    <div className="Section" id="alternate">
      <h1>Birdhouse Bakery Creations</h1>
      <h2>A gallery of edible artistry</h2>
      <img src={flourish} className="flourish" alt="decorative"/>
      <div className="gallery_container">
        <div className="gallery_card">
          <img src={sample1} alt="baked goods: cheesecake with whipped topping and fresh fruit"/>
        </div>
        <div className="gallery_card">
          <img src={sample2} alt="baked goods: lemon pie with whipped topping and edible flowers"/>
        </div>
        <div className="gallery_card">
          <img src={sample3} alt="baked goods: french silk pie with whipped peanut butter topping"/>
        </div>
        <div className="gallery_card">
          <img src={sample4} alt="baked goods: flan"/>
        </div>
        <div className="gallery_card">
          <img src={sample5} alt="baked goods: truffle decorated with elegant sugar art"/>
        </div>
        <div className="gallery_card">
          <img src={sample6} alt="baked good: carrot cake cake ball topped with cream cheese frosting"/>
        </div>
        <div className="gallery_card">
          <img src={sample7} alt="baked goods: slice of caramel cake, frosted and topped with rice cookie"/>
        </div>
        <div className="gallery_card">
          <img src={sample8} alt="baked goods: red velvet mini doughnut with cream cheese icing and sprinkles"/>
        </div>
        <div className="gallery_card">
          <img src={sample9} alt="baked goods: pecan cake topped with candied pecans"/>
        </div>
        <div className="gallery_card">
          <img src={sample10} alt="baked goods: german chocolate cake decorated with a chocolate ganache and drip icing"/>
        </div>
        <div className="gallery_card">
          <img src={sample11} alt="baked goods: carrot cake topped with granola triangles"/>
        </div>
        <div className="gallery_card">
          <img src={sample12} alt="baked goods: cookies and cream cheesecake"/>
        </div>
      </div>
    </div>
  )
}

export default Gallery