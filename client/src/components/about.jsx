import headshot from "../assets/headshot.png"
import decor1 from "../assets/decor-1.png"
import flourish from "../assets/flourishes/flourish1.png"
function About() {
  return (
    <div className="Section" id="top">
      <h1>About Birdhouse Bakery</h1>
      <h2>Elevating your celebrations</h2>
      <img src={flourish} className="flourish" alt="decorative"/>
      <p>Birdhouse Bakery, nestled in the heart of Spencer, Iowa, specializes in creating delectable cakes and pastries for every event—whether it is weddings, birthdays, and anything in between.</p>
      <p>Owner, Chef Robin, originally from San Diego, California, having worked in prestigious kitchens such as the Sycuan Casino Resort, brings over 40 years of professional experience into each of her beautiful creations.</p>
      <p>After moving to Spencer with her husband Jim in 2021, Chef Robin decided to go for her dream of owning her own bakery. Since then, Birdhouse Bakery has become a beloved destination for those seeking the perfect treats for their special occasions.</p>
      <p>As a pastry chef, Robin’s expertise in dessert design produces delightful treats that are a beautiful sight to see and a delicious bite to eat. Her creativity and self-expression come together to create a balance of flavors that are sure to satisfy your sweet tooth.</p>
      <p>Contact Birdhouse Bakery in Spencer, IA, to discover the perfect blend of artistry, taste, and passion. Let Robin Kruse create a stunning dessert for your next event, ensuring an unforgettable experience for you and your guests. Trust in their expertise to make your sweetest dreams come true.</p>
      <h3>Farmer's Market</h3>
      <p>In addition to offering custom orders for special events, you can pick up some of Chef Robin's goodies all summer long at the Lakes Area Farmers Market. Check out their <a href="https://bestfarmersmarkets.org/place/lakes-area-farmers-market-spirit-lake-ia.html">current schedule</a>, and plan a time to indulge your tastebuds.</p>
      <img src={decor1} id="headshot" alt="decorative"/>
    </div>
  )
}

export default About