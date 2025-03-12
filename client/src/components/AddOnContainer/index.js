import React from 'react'

const index = (props) => {
    const {each, index} = props
    return (
        <li style={{backgroundColor: index % 2 !== 0?  "lightblue": "white", width: "20%", padding:"0px 0px 0px 30px", marginTop:"0px"}}>
            <p style={{fontWeight:"bold"}}>{each[0]}</p>
            <ul style={{listStyleType: "none", paddingLeft:"0px", marginLeft:"0px", marginBottom:"5px", paddingTop:"0px", marginTop:"0px"}}>
                {each[1].map((each, index)=>
                <li key={index} style={{padding:"4px", paddingLeft:"0px"}}>
                    {each}
                </li>)}
            </ul>
        </li>
    )
}

export default index