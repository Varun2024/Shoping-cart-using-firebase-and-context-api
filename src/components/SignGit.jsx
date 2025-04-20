/* eslint-disable no-unused-vars */
import { GithubAuthProvider,signInWithPopup } from 'firebase/auth'
import { auth } from "../firebase/firebase"
import React from 'react'



const SignGit = () => {
  const handleGLogin = async () => {
    const provider = new GithubAuthProvider()

    try {
      const result = await signInWithPopup(auth , provider)
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user

      console.log(user)
      console.log("user info", user)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <button onClick={handleGLogin }>GitHub</button>
  )
}

export default SignGit