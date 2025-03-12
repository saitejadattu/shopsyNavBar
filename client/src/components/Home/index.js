import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import NavBar from "../NavBar"
import CategorySection from '../CategorySection'
import AddOnContainer from "../AddOnContainer"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
const productCategory = [
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/16d096e4-3425-4e2e-9781-6fb1ece1f3d7.jpg?q=60",
        title: "Women Colthing",
        types:
        {
            "Ethnic Wear": [
                'Sarees', 'Lehenga Cholis', 'Blouses', 'Dupattas', 'Patiala Salwar', 'Kurtas', 'Sharara Pants', 'Ethnic Sets', 'Petticoats', 'Leggings', 'Dhoti', 'Jeggings'],
            "Western Wear":
                ['Skirts', 'Waistcoats', 'T -Shirts', 'Shirts', 'Jeans', 'Shorts', 'Top', 'Trousers', 'Jumpsuits', 'Gowns', 'Dungarees', 'Dresses'],
            "Winter Wear": ['Jackets', 'Ponchos', 'Sweaters', 'Shrugs', 'Sweatshirts'],
            'Innerwear': ['Bras', 'Camisoles', 'Lingerie Sets', 'Shapewear', 'Thermals', 'Panties', 'Tights', 'All Innerwear'],
            'Loungewear & Activewear': ['Nightdress', 'Swimsuits', 'Tracksuits', 'Night Suits', 'Bathrobes']
        }
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/9cd2872b-11ac-488d-ab4b-7d65d98b4c74.jpg?q=60",
        title: "Men Colthing",
        types:
        {
            "Ethnic Wear": ['Sherwani', 'Dhotis', 'Kurtas', 'Harem Pants', 'Ethnic Bottom', 'All Ethnic Wear'],
            'Western Wear':['Jeans','T-Shirts','Jackets','Sweatshirts','Shrugs','Shorts','Cargo Pants','Co-ord Sets','Topwear','Sweaters'],
            'Mens Formal Wear':['Shirts','Blazers','Waistcoats','Trousers','Suits','Formal Shirts'],
            'Inner Wear':['Vests','Underwear','Lungis','Night Suits','Bandana','Thermals','Innerwear','Boxers','Tights','Bodyshaper'],
            'Loungewear, Activewear & more':
['Track Pant',
'Tracksuits',
'Swimming Costume',
'Bathrobes',
'Winter Wear',
'Gloves']
        }
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/3ada2633-c930-4df4-8cc8-f21a9a4d54d1.jpg?q=60",
        title: "Kids Colthing"
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/da193762-44de-4814-baf8-bfaf961e2430.jpg?q=60",
        title: "Footware"
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/f13ffe75-154c-4162-866b-ffb6e54ee94c.jpg?q=60",
        title: "Beauty and Wellness & More"
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/47710dbe-a3b2-4b4a-8862-9b4ec185ac11.jpg?q=60",
        title: "Accessories & More"
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/740c4a58-75f0-43cf-8d97-8c86f37644a2.jpg?q=60",
        title: "Home Decore"
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/86e54f01-0183-4573-9a36-1182ccfcf27e.jpg?q=60",
        title: "Home Furnishing"
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/4ace4a0f-53b2-4f2a-b5bf-da65d7fe3263.jpg?q=60",
        title: "Kitchen & Appliances"
    },
    {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/09/07/2024/a8ac02c8-0118-45b6-ab05-90a959f9e9dd.jpg?q=60",
        title: "Sports"
    }, {
        img: "https://rukminim2.flixcart.com/www/128/128/promos/27/05/2024/1f402fea-8ce1-4c4c-80a3-a849448441bd.jpg?q=60",
        title: "Toys & Stationery"
    }
]

const Home = () => {
    const [categoryTypes, setCategoryTypes] = useState()
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
    const dropBox = (e) => {
        setCategoryTypes(e)
    }
    const removeBox = () => {
        setCategoryTypes()
    }
    const handleUl = () => {
        console.log("trigger")
    }
    return (
        <div style={{ backgroundColor: "#dee8fc", height: "100vh" }}>
            <NavBar />
            <div style={{ backgroundColor: "white", margin: "10px 100px 0px", height:"140px"}}>
                <Slider {...settings} style={{}}>
                    {productCategory.map((each) => <CategorySection each={each} key={each.title} removeBox={removeBox} dropBox={dropBox} />)}
                </Slider>
            </div>
            <ul style={{ listStyleType: "none", paddingLeft: "0px", marginLeft: "0px", display: "flex", margin: "0px 99px 0px", backgroundColor: 'white', fontSize: "15px" }} onMouseEnter={handleUl}>
                {categoryTypes && Object.entries(categoryTypes).map((each, index) => <AddOnContainer each={each} key={each[0]} index={index} />)}
            </ul>
        </div>
    )
}

export default Home

// {/* <MdArrowBackIos style={{ display: "none" }} /> */}
//
// {/* <MdArrowForwardIos className='arrows' style={{ alignSelf: "center" }} /> */}