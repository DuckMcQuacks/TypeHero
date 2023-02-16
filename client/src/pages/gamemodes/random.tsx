import {useState, useEffect,useRef} from "react"
import Game from "../../components/game"
export default function Quotes(){
const [data, setData] = useState<Array<string>>([""])
const [randomNumber, setRandomNumber] = useState<number>(21);
function randomIntFromInterval(min : number, max : number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function changeRandomNum(){
    setRandomNumber(randomIntFromInterval(7,15));
}
function getQuote(){
    fetch("https://random-word-api.herokuapp.com/word?number="+randomNumber)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        setData(data)
        changeRandomNum();
    })
}

useEffect(()=>{
    getQuote();
},[])
    return(
        <>
        <Game key={randomNumber} text={data.join(' ')} getNewtext={getQuote} buttonText={"words"}/> 
        </>
    )
}