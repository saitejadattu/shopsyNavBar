import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux"

const CategorySection = (props) => {
    const [arrowState, setArrowState] = useState(false)
    const { each, dropBox, removeBox } = props
    const { title, img, types } = each
    const dispatch = useDispatch()
    const arrowStatus = useSelector((state)=>state.status)
    const handleArrowDown = () => {
        setArrowState((prev) => true)
        dispatch({ type: "status", payload: true })
        dropBox(types)
    }
    const handleArrowUp = () => {
        setArrowState((prev) => false)
        dispatch({ type: "status", payload: false })
        removeBox()
    }
    
    return (
        <div style={{ paddingTop: "10px", display: 'flex', flexDirection: 'column',height:"140px"}} onMouseEnter={handleArrowDown} onMouseLeave={handleArrowUp} >
            <img src={img} alt={title} style={{ width: "70px", height: "70px", alignSelf: "center" }} />
            <div style={{ display: "flex", gap: "5px", alignSelf: "center" }}>
                <p style={{ fontSize: "15px", alignSelf: "center", textAlign: "center", fontWeight: "bold" }}>{title} </p>
                <div style={{
                    alignSelf: "center",
                    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out", opacity: "1", transform: arrowState ? "rotate(180deg)" : "rotate(0deg)",
                }}>{arrowState ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
            </div>
        </div>
    )
}
export default CategorySection
// console.log(types)
// return (
//     <div style={{display: "flex", flexDirection: "column"}}>
//         <li style={{ alignSelf: 'center', width: "100%", height: "150px", border: "1px solid red" }}>
//             <img alt={title} style={{ height: "100px", width: "100px", alignSelf: "center" }} src={img} />
//             <p style={{ alignSelf: "center", fontSize: "13px", fontWeight: "500", textAlign: "center" }}>{title}</p>
//         </li>
//     </div>
// )