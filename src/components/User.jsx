import {useState} from 'react'

function User() {
    const [userName,setUserName]=useState("Arslan akmal")
    const [userAge,setUserAge]=useState(27)
    const [userEmail,setUserEmail]=useState("arxlan62@gmail.com")
    const [userPhone,setUserPhone]=useState("03074254897")
    const [userPassword,setUserPassword]=useState("abc12345@")
    return (
        <>
    <h1>My name is:{userName}</h1>
    <h1>My age is:{userAge}</h1>
    <h1>My email is:{userEmail}</h1>
    <h1>My phone number is:{userPhone}</h1>
    <h1>My password is:{userPassword}</h1>

    </>
  )
}

export default User