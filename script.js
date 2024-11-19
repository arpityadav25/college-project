const urlParams = new URLSearchParams(window.location.search);
const selectedCountry = urlParams.get("country");

const destinationData = {
  japan: {
    name: "Japan",
    capital: "Tokyo",
    distance: "5,968 km from India",
    language: "Japanese",
    description: `Japan is a captivating blend of ancient traditions and cutting-edge modernity. From the serene temples and cherry 
    blossom gardens to the bustling streets of Tokyo and the innovative technology, Japan offers a unique and unforgettable experience. 
    Its rich cultural heritage, stunning landscapes, and delicious cuisine make it a must-visit destination for travelers seeking both 
    tranquility and excitement. Explore the ancient temples of Kyoto, where history whispers through every stone, or lose yourself in 
    the neon-lit wonderland of Tokyo, a city that never sleeps. Marvel at the natural beauty of Mount Fuji, the serene beauty of cherry 
    blossoms in spring, and the tranquil gardens that dot the landscape. Savor the exquisite flavors of Japanese cuisine, from sushi and 
    ramen to delicate kaiseki meals. Whether you're seeking adventure, relaxation, or a cultural immersion, 
    Japan promises an experience that will leave you enchanted and longing for more.`,
    image: "images/japan.jpg",
  },
  norway: {
    name: "Norway",
    capital: "Oslo",
    distance: "6,000 km from India",
    language: "Norwegian",
    description: `Norway is a land of stunning fjords, vibrant cities, and rich cultural heritage. From the breathtaking Northern
     Lights to the serene fjords and majestic mountains, Norway offers a unique and unforgettable experience. Its rich Viking history, 
     picturesque landscapes, and delicious cuisine make it a must-visit destination for travelers seeking both adventure and tranquility.
      Explore the charming streets of Oslo, where modern architecture meets historical landmarks, or embark on a scenic journey through 
      the fjords. Marvel at the natural beauty of the Lofoten Islands, the midnight sun in summer, and the cozy warmth of traditional 
      Norwegian cabins. Savor the exquisite flavors of Norwegian cuisine, from fresh seafood to traditional dishes like rakfisk and 
      lutefisk. Whether you're seeking adventure, relaxation, or a cultural immersion, 
    Norway promises an experience that will leave you enchanted and longing for more.`,
    image: "images/norway.jpg",
  },
  france: {
    name: "France",
    capital: "Paris",
    distance: "7,000 km from India",
    language: "French",
    description: `France is renowned for its romantic ambiance, 
    iconic landmarks, and exquisite cuisine. From the charming streets of 
    Paris to the picturesque countryside and stunning coastlines, France 
    offers a unique and unforgettable experience. Its rich cultural heritage, 
    world-famous art, and delicious cuisine make it a must-visit destination 
    for travelers seeking both elegance and excitement. Explore the iconic Eiffel Tower, 
    where history and romance intertwine, or lose yourself in the art and culture of the Louvre Museum. 
    Marvel at the natural beauty of the French Riviera, the serene vineyards of Bordeaux, 
    and the charming villages of Provence. Savor the exquisite flavors of French cuisine, 
    from croissants and baguettes to gourmet dishes like coq au vin and bouillabaisse. 
    Whether you're seeking adventure, relaxation, or a cultural immersion, France promises an 
    experience that will leave you enchanted and longing for more.`,
    image: "images/france.jpg",
  },
  iceland: {
    name: "Iceland",
    capital: "Reykjavik",
    distance: "8,000 km from India",
    language: "Icelandic",
    description: `Iceland is a land of dramatic landscapes, geothermal wonders, and vibrant culture. 
    From the stunning waterfalls and geysers to the serene glaciers and volcanic landscapes, Iceland offers a unique and 
    unforgettable experience. Its rich Viking history, breathtaking natural beauty, and delicious cuisine make it a must-visit 
    destination for travelers seeking both adventure and tranquility. Explore the charming streets of Reykjavik, where modern 
    design meets historical landmarks, or embark on a scenic journey through the Golden Circle. Marvel at the natural beauty 
    of the Blue Lagoon, the Northern Lights in winter, and the midnight sun in summer. Savor the exquisite flavors of Icelandic 
    cuisine, from fresh seafood to traditional dishes like hákarl and skyr. Whether you're seeking adventure, relaxation, 
    or a cultural immersion, Iceland promises an experience that will leave you enchanted and longing`,
    image: "images/iceland.jpg",
  },
  canada: {
    name: "Canada",
    capital: "Ottawa",
    distance: "11,500 km from India",
    language: "English, French",
    description: `Canada is known for its vast wilderness, multicultural cities, and friendly people. From the majestic 
    Rocky Mountains and pristine lakes to the vibrant cities of Toronto and Vancouver, Canada offers a unique and unforgettable 
    experience. Its rich cultural diversity, stunning natural beauty, and delicious cuisine make it a must-visit destination for 
    travelers seeking both adventure and tranquility. Explore the charming streets of Quebec City, where history comes alive, or 
    embark on a scenic journey through the Canadian Rockies. Marvel at the natural beauty of Niagara Falls, the serene beauty of 
    Banff National Park, and the vibrant culture of Montreal. Savor the exquisite flavors of Canadian cuisine, from poutine and 
    maple syrup to fresh seafood and indigenous dishes. Whether you're seeking adventure, relaxation, or a cultural immersion, 
    Canada promises an experience that will leave you enchanted and longing for more.`,
    image: "images/canada.jpg",
  },
  greece: {
    name: "Greece",
    capital: "Athens",
    distance: "6,000 km from India",
    language: "Greek",
    description: `Greece is celebrated for its ancient history, stunning islands, and delicious cuisine. From the iconic ruins of 
    Athens and the beautiful beaches of Santorini to the charming villages of Crete, Greece offers a unique and unforgettable experience. 
    Its rich cultural heritage, breathtaking landscapes, and delicious cuisine make it a must-visit destination for travelers seeking 
    both adventure and tranquility. Explore the ancient ruins of the Acropolis, where history whispers through every stone, or lose yourself 
    in the vibrant nightlife of Mykonos. Marvel at the natural beauty of the Greek islands, the serene beauty of the Aegean Sea, and the 
    charming streets of Athens. Savor the exquisite flavors of Greek cuisine, from moussaka and souvlaki to fresh seafood and baklava. 
    Whether you're seeking adventure, relaxation, or a cultural immersion, 
    Greece promises an experience that will leave you enchanted and longing for more.`,
    image: "images/greece.jpg",
  },
  australia: {
    name: "Australia",
    capital: "Canberra",
    distance: "10,000 km from India",
    language: "English",
    description: `Australia is famous for its diverse landscapes, unique wildlife, and vibrant cities. From the stunning Great Barrier 
    Reef and the iconic Sydney Opera House to the vast Outback and beautiful beaches, Australia offers a unique and unforgettable experience.
     Its rich cultural heritage, breathtaking natural beauty, and delicious cuisine make it a must-visit destination for travelers seeking 
     both adventure and tranquility. Explore the vibrant streets of Melbourne, where art and culture thrive, or embark on a scenic journey 
     through the Great Ocean Road. Marvel at the natural beauty of the Blue Mountains, the serene beauty of the Whitsunday Islands, and the 
     unique wildlife of Kangaroo Island. Savor the exquisite flavors of Australian cuisine, from barbecued meats and seafood to indigenous 
     bush tucker. Whether you're seeking adventure, relaxation, or a cultural immersion, 
    Australia promises an experience that will leave you enchanted and longing for more.`,
    image: "images/australia.jpg",
  },
  switzerland: {
    name: "Switzerland",
    capital: "Bern",
    distance: "6,500 km from India",
    language: "German, French, Italian, Romansh",
    description: `Switzerland is renowned for its picturesque landscapes, luxury watches, and delicious chocolate. From the stunning Swiss 
    Alps and pristine lakes to the charming cities of Zurich and Geneva, Switzerland offers a unique and unforgettable experience. Its 
    rich cultural heritage, breathtaking natural beauty, and delicious cuisine make it a must-visit destination for travelers seeking both 
    adventure and tranquility. Explore the charming streets of Lucerne, where history comes alive, or embark on a scenic journey through the
     Swiss Alps. Marvel at the natural beauty of Lake Geneva, the serene beauty of the Matterhorn, and the charming villages of the Swiss 
     countryside. Savor the exquisite flavors of Swiss cuisine, from fondue and raclette to gourmet chocolates and pastries. Whether you're 
     seeking adventure, relaxation, or a cultural immersion, Switzerland promises an experience that will leave you enchanted and longing for more.`,
    image: "images/switzerland.jpg",
  },
  italy: {
    name: "Italy",
    capital: "Rome",
    distance: "6,500 km from India",
    language: "Italian",
    description: `Italy is known for its rich history, stunning architecture, and world-famous cuisine. From the iconic Colosseum and the 
    beautiful canals of Venice to the charming villages of Tuscany, Italy offers a unique and unforgettable experience. Its rich cultural 
    heritage, breathtaking landscapes, and delicious cuisine make it a must-visit destination for travelers seeking both adventure and 
    tranquility. Explore the ancient ruins of Rome, where history whispers through every stone, or lose yourself in the romantic streets 
    of Florence. Marvel at the natural beauty of the Amalfi Coast, the serene beauty of Lake Como, and the charming streets of Milan. Savor 
    the exquisite flavors of Italian cuisine, from pasta and pizza to gelato and tiramisu. Whether you're seeking adventure, relaxation, or a cultural immersion, 
    Italy promises an experience that will leave you enchanted and longing for more.`,
    image: "images/italy.jpg",
  },
  newzealand: {
    name: "New Zealand",
    capital: "Wellington",
    distance: "12,000 km from India",
    language: "English, Maori",
    description: `New Zealand is celebrated for its breathtaking landscapes, adventure sports, and Maori culture. From the stunning fjords 
    of Milford Sound and the beautiful beaches of the Bay of Islands to the vibrant cities of Auckland and Wellington, New Zealand offers a 
    unique and unforgettable experience. Its rich cultural heritage, breathtaking natural beauty, and delicious cuisine make it a must-visit
     destination for travelers seeking both adventure and tranquility. Explore the charming streets of Queenstown, where adventure awaits, 
     or embark on a scenic journey through the Southern Alps. Marvel at the natural beauty of the Tongariro National Park, the serene beauty
      of the Abel Tasman National Park, and the unique wildlife of Stewart Island. Savor the exquisite flavors of New Zealand cuisine, from 
      lamb and seafood to indigenous Maori dishes. Whether you're seeking adventure, relaxation, or a cultural immersion, 
    New Zealand promises an experience that will leave you enchanted and longing for more.`,
    image: "images/newzealand.jpg",
  },
};

if (destinationData[selectedCountry]) {
  const data = destinationData[selectedCountry];
  document.getElementById("dest-name").textContent = data.name;
  document.getElementById("capital").textContent = data.capital;
  document.getElementById("distance").textContent = data.distance;
  document.getElementById("language").textContent = data.language;
  document.getElementById("description").textContent = data.description;

  document.getElementById(
    "dest-image"
  ).style.backgroundImage = `url(${data.image})`;
} else {
  document.body.innerHTML = `
    <p>Destination not found. Please go back to the <a href="index.html">homepage</a>.</p>`;
}
