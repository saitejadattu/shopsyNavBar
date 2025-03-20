import React from "react";
import NavBar from "../NavBar";
import CategorySection from "../CategorySection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import CategoryTypes from "../CategoryTypes";
const productCategory = [
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/16d096e4-3425-4e2e-9781-6fb1ece1f3d7.jpg?q=60",
    title: "Women Colthing",
    types: {
      "Ethnic Wear": [
        "Sarees",
        "Lehenga Cholis",
        "Blouses",
        "Dupattas",
        "Patiala Salwar",
        "Kurtas",
        "Sharara Pants",
        "Ethnic Sets",
        "Petticoats",
        "Leggings",
        "Dhoti",
        "Jeggings",
      ],
      "Western Wear": [
        "Skirts",
        "Waistcoats",
        "T -Shirts",
        "Shirts",
        "Jeans",
        "Shorts",
        "Top",
        "Trousers",
        "Jumpsuits",
        "Gowns",
        "Dungarees",
        "Dresses",
      ],
      "Winter Wear": [
        "Jackets",
        "Ponchos",
        "Sweaters",
        "Shrugs",
        "Sweatshirts",
      ],
      Innerwear: [
        "Bras",
        "Camisoles",
        "Lingerie Sets",
        "Shapewear",
        "Thermals",
        "Panties",
        "Tights",
        "All Innerwear",
      ],
      "Loungewear & Activewear": [
        "Nightdress",
        "Swimsuits",
        "Tracksuits",
        "Night Suits",
        "Bathrobes",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/9cd2872b-11ac-488d-ab4b-7d65d98b4c74.jpg?q=60",
    title: "Men Colthing",
    types: {
      "Ethnic Wear": [
        "Sherwani",
        "Dhotis",
        "Kurtas",
        "Harem Pants",
        "Ethnic Bottom",
        "All Ethnic Wear",
      ],
      "Western Wear": [
        "Jeans",
        "T-Shirts",
        "Jackets",
        "Sweatshirts",
        "Shrugs",
        "Shorts",
        "Cargo Pants",
        "Co-ord Sets",
        "Topwear",
        "Sweaters",
      ],
      "Mens Formal Wear": [
        "Shirts",
        "Blazers",
        "Waistcoats",
        "Trousers",
        "Suits",
        "Formal Shirts",
      ],
      "Inner Wear": [
        "Vests",
        "Underwear",
        "Lungis",
        "Night Suits",
        "Bandana",
        "Thermals",
        "Innerwear",
        "Boxers",
        "Tights",
        "Bodyshaper",
      ],
      "Loungewear, Activewear & more": [
        "Track Pant",
        "Tracksuits",
        "Swimming Costume",
        "Bathrobes",
        "Winter Wear",
        "Gloves",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/3ada2633-c930-4df4-8cc8-f21a9a4d54d1.jpg?q=60",
    title: "Kids Colthing",
    types: {
      "Girls Wear": [
        "Cargo Pants",
        "Frocks",
        "Tops",
        "Dresses",
        "Jeans",
        "Jumpsuits",
        "Shorts",
        "Skirts",
        "Swimsuits",
        "Trackpants",
        "Underwear",
        "Night Suits",
      ],
      "Girls Ethnic Wear": ["Gowns", "Sarees", "Lehenga Choli"],
      "Boys Wear": [
        "Cargo Pants",
        "Jeans",
        "Night Suits",
        "Shorts",
        "Swimwear",
        "Trackpants",
        "Kurtas",
      ],
      "Kids Wester Wear": [
        "Jackets",
        "Jeans",
        "Shirts",
        "Trousers",
        "Shorts",
        "T-Shirts",
        "Dungarees",
        "Waistcoats",
        "Three Fourths,",
        "Blazer",
        "Clothing",
        "Clothing Sets",
      ],
      "Kids Innerwear, Activewear & more": [
        "Night Suits",
        "Innerwear",
        "Dhotis",
        "Ethnic Wear",
        "Vests",
        "Track Pants",
        "Tracksuits",
      ],
      "Kids Ethnic Wear": ["Dhotis", "Sherwanis", "Ethnic Wear"],
      "Kids Winter Wear": [
        "Shrugs",
        "Socks",
        "Sweaters",
        "Sweatshirts",
        "Thermal",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/da193762-44de-4814-baf8-bfaf961e2430.jpg?q=60",
    title: "Footware",
    types: {
      "Women Footwear": [
        "Sneakers",
        "Flip Flops",
        "Slippers",
        "Sport Shoes",
        "Boots",
        "Flats",
        "Heels",
        "Flat Shoes",
        "Wedges",
        "Mules",
        "Ballerinas",
        "All Footwear",
      ],
      "Men Footwear": [
        "Boots",
        "Flip Flops",
        "Sandals",
        "Formal Shoes",
        "Slippers",
        "Sneakers",
        "Sports Shoes",
        "All Footwear",
      ],
      "Kids Footwear": ["All Footwear"],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/f13ffe75-154c-4162-866b-ffb6e54ee94c.jpg?q=60",
    title: "Beauty and Wellness & More",
    types: {
      Makeup: [
        "Kajal",
        "Lipstick",
        "Foundation",
        "Highlighters",
        "Concealer",
        "Eyeliner",
        "Lip Gloss",
        "Primer",
        "Blush",
        "Eyeshadow",
        "Compact Powder",
        "Mascara",
      ],
      "Makeup Accessories": [
        "False Eyelashes",
        "Eyelash Curlers",
        "Makeup Remover",
        "Makeup Sponge",
        "Makeup Brushes",
        "Makeup Pouch",
        "Makeup Kit",
        "Eye Makeup",
      ],
      "Bath & Body": [
        "Face Wash",
        "Face Scrub",
        "Shampoo",
        "Loofah",
        "Soap",
        "Body Wash",
        "Cleanser",
        "Pumice Stones",
      ],
      "Skin Care": [
        "Sunscreen",
        "Moisturizer",
        "Skin Whitening Cream",
        "Face Pack",
        "Under Eye Cream",
        "Eye Mask",
        "Toner",
        "Facial Kit",
        "Lip Balm",
        "Talcum Powder",
        "Beard Oils",
      ],
      "Hair Products": [
        "Hair Claws",
        "Hair Colours",
        "Hair Serums",
        "Hair Extension",
        "Hair Oil",
        "Hair Band",
        "Hair Care",
        "Hair Sprays",
        "Hair Brush",
        "Hair Wax",
        "Hair Gel",
      ],
      "Hair Accessories": [
        "Scrunchies",
        "Hair Clips",
        "Bun",
        "Hair Pins",
        "Banana Clips",
        "Tic Tac Clip",
        "Combs",
      ],
      "Personal Care": [
        "Facial Wipes",
        "Blackhead Remover",
        "Tweezer",
        "Deodorant",
        "Perfumes",
        "Nail Cutter",
        "Nail Polish",
        "Mehendi",
      ],
      "Wellness & More": [
        "Condom",
        "Menstrual Cup",
        "Tampons",
        "Pregnancy Kits",
        "Sanitary Pads",
        "Panty Liners",
        "Razors",
        "Diaper Bags",
        "Hot Bags",
        "Adult Diapers",
      ],
      "Oral Care": [
        "Toothpaste",
        "Toothbrush",
        "Dental Floss",
        "Mouthwash",
        "Toothbrush Covers",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/47710dbe-a3b2-4b4a-8862-9b4ec185ac11.jpg?q=60",
    title: "Accessories & More",
    types: {
      Accessories: [
        "Smart Watches",
        "Sunglasses",
        "Watches",
        "Caps",
        "Hats",
        "Socks",
        "Belt",
        "Scarves",
        "Brooches",
        "Handkerchiefs",
        "Mufflers",
        "Umbrellas",
      ],
      Bags: ["Messenger Bag", "Duffle Bags", "Gym Bags", "Backpacks"],
      "Womens Jewellery": [
        "Rings",
        "Necklaces",
        "Earrings",
        "Mangalsutras",
        "Nose Rings",
        "Bangles",
        "Anklets",
        "Mang Tikkas",
        "Bracelets",
        "Jewellery Sets",
      ],
      "Womens Bags & more": [
        "Sling Bags",
        "Shoulder Bags",
        "Tote Bags",
        "Handbags",
        "Wallets",
        "Jewellery Boxes",
      ],
      "Mens Accessories & more": ["Crossbody Bags", "Wallets"],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/740c4a58-75f0-43cf-8d97-8c86f37644a2.jpg?q=60",
    title: "Home Decore",
    types: {
      "Decor Items": [
        "Artificial Flowers",
        "Artificial Fruits",
        "Artificial Plants",
        "Home Wallpaper",
        "Humidifiers",
        "Torans",
        "Vases",
        "Wall Hangings",
        "Wind Chimes",
        "Showpiece",
        "Carpets",
        "All Decor",
      ],
      "Home Lighting": [
        "Ceiling Lights",
        "Chandeliers",
        "Disco Lights",
        "Emergency Bulbs",
        "Emergency Light",
        "Floor Lamp",
        "Home Lighting",
        "Led Lights",
        "Night Lamps",
        "Rice Lights",
        "Wall Lamps",
        "Bulb",
      ],
      "Home Utilites": [
        "Air Fresheners",
        "Aroma Oils",
        "Bathroom Tile Cleaners",
        "Brooms",
        "Candle Holders",
        "Cleaning Glove",
        "Cleaning Wipes",
        "Diffusers",
        "Door Stopper",
        "Dustbins",
        "Dustpans",
        "Everyday Tools",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/86e54f01-0183-4573-9a36-1182ccfcf27e.jpg?q=60",
    title: "Home Furnishing",
    types: {
      Furnishing: [
        "Bookshelves",
        "Carpets",
        "Dressing Table",
        "Lounge Chairs",
        "Nesting Tables",
        "Outdoor Tables",
        "Rocking Chairs",
        "Shoe Rack",
        "Side Tables",
        "Stools",
        "Wall Shelves",
        "All Furnishing",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/4ace4a0f-53b2-4f2a-b5bf-da65d7fe3263.jpg?q=60",
    title: "Kitchen & Appliances",
    types: {
      Appliances: [
        "Dishwasher Machine",
        "Egg Boiler",
        "Electric Pans",
        "Handjuicer",
        "Waffle Maker",
        "Electric Cookers",
        "Electric Chopper",
        "Roti Makers",
      ],
      Crockery: [
        "Plates",
        "Bowls",
        "Spoons",
        "Chopsticks",
        "Straws",
        "Dinner Sets",
        "Water Glasses",
        "Jugs",
        "Mug",
        "Cup And Saucer",
        "Cutlery",
        "Mason Jars",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/a8ac02c8-0118-45b6-ab05-90a959f9e9dd.jpg?q=60",
    title: "Sports",
    types: {
      Health: [
        "Stethoscope",
        "Bandages",
        "Eye Drops",
        "Crepe Bandages",
        "Wheelchairs",
        "Health Drinks",
        "Urine Pot",
        "Health Supplements",
        "Pill Boxes",
        "Tablet Cutters",
        "Walking Sticks",
        "Commode Chairs",
      ],
    },
  },
  {
    img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/1f402fea-8ce1-4c4c-80a3-a849448441bd.jpg?q=60",
    title: "Toys & Stationery",
    types: {
      "Kids Toys": [
        "Animal Soft Toys",
        "Battle Toys",
        "Educational Toys",
        "Musical Toys",
        "Stuff Toys",
        "Teddy Bear",
        "Vehicle Toys",
        "Bubble Makers",
        "Water Guns",
        "Doll House",
        "Dolls",
        "Doctor Sets",
      ],
    },
  },
];

const Home = () => {
  const [activeCat, setActiveCat] = React.useState();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const addDrop = (e) => {
    setActiveCat(e);
  };
  const removeDrop = () => {
    setActiveCat();
  };
  return (
    <div style={{ backgroundColor: "#dee8fc", height: "100vh" }}>
      <NavBar />
      <div
        style={{
          backgroundColor: "white",
          margin: "10px 100px 0px",
          height: "140px",
        }}
      >
        <Slider {...settings}>
          {productCategory.map((each) => (
            <CategorySection
              each={each}
              key={each.title}
              activeCat={activeCat}
              addDrop={addDrop}
              removeDrop={removeDrop}
            />
          ))}
        </Slider>
      </div>
      <ul
        style={{
          display: "flex",
          width:'1331px',
          margin: "0px 100px 0px",
          backgroundColor: "white",
          marginTop: "0px",
          paddingTop: "0px",
          listStyleType: "none",
          paddingLeft: "5px",
          overflowX:'auto',
        }}
        onMouseEnter={() => setActiveCat(activeCat)}
        onMouseLeave={() => setActiveCat()}
      >
        {activeCat &&
          Object.entries(activeCat?.types).map((each, index) => (
            <CategoryTypes key={each} each={each} index={index} />
          ))}
      </ul>
    </div>
  );
};

export default Home;

// {/* <MdArrowBackIos style={{ display: "none" }} /> */}
//
// {/* <MdArrowForwardIos className='arrows' style={{ alignSelf: "center" }} /> */}
