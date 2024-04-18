import { useState } from 'react'
import axios from "axios"

export default function Signup() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/signup', {username, password, email})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" name="email" id="email">Email</label>
                <input type="email" name="email" id="email" palceholder="Enter Email" required
                onChange={e=> setEmail(e.target.value)}/>
                <br/>


                <label htmlFor="username" name="username" id="username">Username</label>
                <input type="username" name="username" id="username" palceholder="Enter Username" required
                onChange={e=> setUsername(e.target.value)}/>
                <br/>

                <label htmlFor="password" name="password" id="password">Password</label>
                <input type="password" name="password" id="password" palceholder="Enter password" required
                onChange={e=> setPassword(e.target.value)}/>
                <br/>



                <button>Submit</button>
            </form>
        </div>
    );
}