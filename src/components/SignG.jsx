/* eslint-disable no-unused-vars */
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { auth } from "../firebase/firebase"
import React from 'react'



const SignG = () => {
  const handleGLogin = async () => {
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth , provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user

      console.log(user)
      console.log("user info", user)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <button onClick={handleGLogin }>Login With Google</button>
  )
}

export default SignG