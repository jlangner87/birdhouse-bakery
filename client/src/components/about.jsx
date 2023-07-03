import headshot from "../assets/headshot.png"
import decor1 from "../assets/decor-1.png"
import flourish from "../assets/flourishes/flourish1.png"
function About() {
  return (
    <div className="Section" id="top">
      <h1>About Birdhouse Bakery</h1>
      <h2>Elevating your celebrations</h2>
      <img src={flourish} className="flourish"/>
      <p>Introducing Birdhouse Bakery, an esteemed in-home bakery located in Spencer, IA, specializing in creating delectable cakes and pastries for every event— whether it be weddings, birthdays, and everything in between. As the proud owner, Robin Kruse brings her 42 years of experience in the restaurant business and 35 years of expertise in the bakery industry to every creation.</p>
      <p>Having spent 20 years as a pastry chef for <a href="https://www.sycuan.com/">Sycuan Casino Resort</a>, a prestigious casino and resort in San Diego, Robin has mastered the art of crafting exquisite sweet treats. Her meticulous attention to detail and creative flair have made her baked goods highly sought after, captivating customers and leaving a lasting impression on their special events.</p>
      <p>Nestled in the heart of Spencer, IA, Birdhouse Bakery has become a beloved destination for those seeking the perfect treats for their special day. Robin's expertise in dessert design and her ability to blend traditional techniques with unique and personalized touches ensure that each sweet treat is a true masterpiece.</p>
      <p>With a focus on quality ingredients and a commitment to exceptional taste, Birdhouse Bakery's baked goods are a delightful treat for both the eyes and the palate. Whether you dream of an elegant cheesecake topped with fresh berries or a rich and decadent dolce de leche, Robin will bring your vision to life, creating a centerpiece that will be remembered and savored by all.</p>
      <p>Birdhouse Bakery also offers catering services for special events. From small gatherings to large celebrations, their delectable pastries and cakes will elevate any occasion, leaving guests craving for more.</p>
      <p>Contact Birdhouse Bakery in Spencer, IA, to discover the perfect blend of artistry, taste, and passion. Let Robin Kruse create a stunning dessert for your next event, ensuring an unforgettable experience for you and your guests. Trust in their expertise to make your sweetest dreams come true.</p>
      <img src={decor1} id="headshot"/>
    </div>
  )
}

export default About