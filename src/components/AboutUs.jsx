import "./About.css"
import {useState,useEffect} from "react"

function AboutUs() {
const [userData,setUserData]=useState(null);

const fetchData=async()=>{
try{
const response=await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political&type=single")
const data=await response.json();
setUserData(data);
}
catch(err){
  console.log(err)
}
}
useEffect(()=>{
  fetchData();
},[])
  return (
<h1>{userData?.joke}</h1>  
  )
}

export default AboutUs