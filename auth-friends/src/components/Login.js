import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = (props) => {
    const [friends, setFriends] = useState()

    // const handlechange = e => {
    // }

    return(
        <div>
            <form>
                <h2>Login</h2>
                <label>Username</label>
                <input type='text' 
                       name='username' 
                       placeholder='username' 
                    //    onChange={handlechange}
                       />
                <label>Password</label>
                <input type='password' 
                       name='password' 
                       placeholder='password' 
                    //    onChange={handlechange}
                       />
                <button>Login</button>
            </form>
        </div>
    )
}


export default Login;