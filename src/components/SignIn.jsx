/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { auth } from "../firebase/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const LoginAccount = async (e) => {
        e.preventDefault()
        try{
            const  userCredential = await signInWithEmailAndPassword(auth,email,password)
            const user = userCredential.user
            alert("signIn successfully")
            setEmail("")
            setPassword("")

        }catch(error){
            alert("sorry")
            console.log(error)
        }
    }

  return (
    
    <div>
        <h2>SignIn</h2>
        <form onSubmit={LoginAccount}>
            <input type="email" placeholder='enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder='enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp