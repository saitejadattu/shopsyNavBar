import React from 'react'
import { Link } from "react-router-dom"
import { IoPersonAddOutline, IoSearch, IoCart } from "react-icons/io5";
import { FaAngleUp, FaAngleDown, FaShop } from "react-icons/fa6";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import "./index.css"
const index = () => {
    return (
        <div >
            <nav style={{ backgroundColor: "white",display: 'flex', justifyContent: "space-between", cursor: "pointer", padding: "16px", paddingLeft: "100px", paddingRight: "100px", gap: "60px" }}>
                <Link to={"/"} style={{ textDecoration: 'none', fontFamily: "arial", fontWeight: '600', color: 'blue', fontSize: '35px' }}>
                    Shopsy
                </Link>
                <div style={{ background: "#e3ebfc", gap: "5px", display: "flex", alignItems: "center", borderRadius: "5px", padding: "10px", flexGrow: "1" }}>
                    <IoSearch />
                    <input type="text" placeholder='Search for Products, Brands and More' style={{ flexGrow: "1", background: "inherit", border: "0px", outline: "none" }} />
                </div>
                <Link style={{ textDecoration: "none", display: "flex", justifyContent: 'center', alignItems: 'center', gap: "5px", color: "black", fontSize: "18px"}}>
                    <IoPersonAddOutline /> Login <FaAngleUp />
                </Link>
                <Link style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "5px", color: "black" }}>
                    <IoCart /> Cart
                </Link>
                <Link style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "5px", color: "black" }}>
                    <FaShop /> Become a Seller
                </Link>
                <PiDotsThreeVerticalBold style={{ alignSelf: "center" }} />
            </nav>
        </div>
    )
}

export default index