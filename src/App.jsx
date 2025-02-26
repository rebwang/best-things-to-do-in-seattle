import { useEffect } from 'react';
import './App.css';
import Cards from './components/Cards'

const cards = [
  {title: "Space Needle 🏙️", image:"img/spaceneedle.jpg", button:"Learn More", link:"https://www.spaceneedle.com/"},
  {title: "Pike Place Market 🥐", image:"img/pike_place.jpg", button:"Learn More", link:"https://www.pikeplacemarket.org/"},
  {title: "Museum of Pop Culture 🪩", image:"img/mopop.jpg", button:"Learn More", link:"https://www.mopop.org/"},
  {title: "Chihuly Garden and Glass 🎨", image:"img/chihuly.jpg", button:"Learn More", link:"https://www.chihulygardenandglass.com/"},
  {title: "Seattle Aquarium 🪼", image:"img/aquarium.jpg", button:"Learn More", link:"https://www.seattleaquarium.org/"},
  {title: "Woodland Park Zoo 🐃", image:"img/zoo.jpg", button:"Learn More", link:"https://www.zoo.org/"},
  {title: "Seattle Great Wheel 🎡", image:"img/great_wheel.jpg", button:"Learn More", link:"https://seattlegreatwheel.com/"},
  {title: "Kerry Park 🏞️", image:"img/kerry_park.jpg", button:"Learn More", link:"https://seattlebloggers.com/kerry-park-a-classic-seattle-view/"},
  {title: "Seattle Art Museum 🖼️", image:"img/sam.jpg", button:"Learn More", link:"https://www.seattleartmuseum.org/"},
  {title: "Gas Works Park 🏞️", image:"img/gas_works.jpg", button:"Learn More", link:"https://seattlebloggers.com/gas-works-park-seattles-unusual-park/"},
]

const App = () => {
  
  useEffect(() => {
    document.title = "Best Things to Do in Seattle";
  }
  );

  return (
    <div className="App">

        <div className="banner">
          <img src="img/banner.jpg"/>
        </div>

        <div className="header">
          <h1>⭐ Best Things to Do in Seattle ⭐</h1>
          <h2>Here are 10 best places to visit in Seattle</h2>
        </div>

      <div className="container">
        <div className="card-grid">
          {cards.map((card, index) => (
            <Cards 
              key={index} 
              title={card.title} 
              image={card.image} 
              button={card.button} 
              link={card.link}
            />
            ))}
        </div>
      </div>
      
    </div>
  )
}

export default App