/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { auth } from "../firebase/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleCreateAccount = async (e) => {
        e.preventDefault()
        try{
            const  userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user
            alert("account created successfully")
            setEmail("")
            setPassword("")

        }catch(error){
            console.log(error)
        }
    }

  return (
    
    <div>
        <h2>SignUp</h2>
        <form onSubmit={handleCreateAccount}>
            <input type="email" placeholder='enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder='enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp