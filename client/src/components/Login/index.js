import React from 'react'

const Login = () => {
    const handleEmail =()=>{
        console.log("lol")
    }
    return (
        <div>
            <form>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <br/>
                <input id="email" type="email" onChange={handleEmail} placeholder='Enter Email' />
                <label></label>
            </form>
        </div>
    )
}

export default Login