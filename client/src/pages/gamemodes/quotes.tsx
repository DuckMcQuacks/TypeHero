import {useState, useEffect,useRef} from "react"
import Game from "../../components/game"
interface quote{
    author: string,
    text: string
}
export default function Quotes(){
const [data, setData] = useState<Array<quote>>([{
    author:"Unknown",
    text:""
}])
const [randomNumber, setRandomNumber] = useState<number>(0);
function randomIntFromInterval(min : number, max : number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function changeRandomNum(){
    setRandomNumber(randomIntFromInterval(0,data.length-1));
}
function getQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        setData(data)
        setRandomNumber(randomIntFromInterval(0,data.length-1))
    })
}

useEffect(()=>{
    getQuote();
},[])
    return(
        <>
        <Game key={randomNumber} text={data[randomNumber].text} getNewtext={changeRandomNum} buttonText={"quote"}/> 
        </>
    )
}