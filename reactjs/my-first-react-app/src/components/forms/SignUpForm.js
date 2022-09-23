import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router'


const SignUpForm = () => {

    
    // useNavitgate hook to switch pages
    const navigator = useNavigate()

    // Use state hook in action
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const userChangeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)
    }

    const submitHandler = (event) => {

        axios.post("http://localhost:8080/api/users/signUp", {user: user})
        .then((response) => {
            navigator('/sign-in')
        })
        .catch((error) => {
            console.log(error)
            // do whatever on a failed response
        })

    }

    return (
        <div className="flex-col signUpForm">
            <div className="margin-auto flex-col">
                <h1 className="center-text">Sign Up For Google!</h1>
                <label>Name</label>
                <input className="signUpInputs" name="name" type="text" placeholder="Name" onChange={userChangeHandler} />
                <label>Email</label>
                <input className="signUpInputs" name="email" type="text" placeholder="Email" onChange={userChangeHandler} />
                <label>Password</label>
                <input className="signUpInputs" name="password" type="password" placeholder="*****" onChange={userChangeHandler} />
                <button className="sign-up-button margin-horiz" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )
}

export default SignUpForm