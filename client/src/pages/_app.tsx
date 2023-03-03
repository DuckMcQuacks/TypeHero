import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar"
import {useState, useEffect} from "react"
export default function App({ Component, pageProps }: AppProps) {
const [userData, setUserData] = useState({
  name: ""
})
async function getUser(){
    if(window.localStorage.getItem("sessionKey"))
    {
    await fetch('/api/getUserController', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: window.localStorage.getItem("sessionKey")
      }),
    }) .then((response) => response.json())
    .then((data) =>{          
      console.log(data)
    if(data == "failed"){
      setUserData((prev)=>{
        return {...prev, name: "Anonymus"}
      })
      return 1;
    }
    else{
      setUserData((prev)=>{
        return {...prev, name: data}
      })
      console.log(data);
    }
  })
  }
  return 1
}
useEffect(()=>{
getUser();
},[])

  return(
  <>
  <Navbar user = {userData}/>
  <main>
    <Component {...pageProps} />
  </main>
  </>)
}
