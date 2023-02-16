import {useState, useEffect,useRef} from "react"
import Game from "../../components/game"
export default function Quotes(){
    const [custom, setCustom] = useState<string>("To set a custom text click on the \"new custom button\" ")
    const [isVisible, setIsVisible] = useState<boolean>(false)
    function customText(){
        setIsVisible(true);
    }
    function handleChange(e: any){
        setCustom(e.target.value)
    }
    return(
        <>
        { isVisible &&
        <div className="customSetter">
            <textarea placeholder="Type your desired text here!" value={custom} onChange={handleChange}/>
            <button onClick={()=>{setIsVisible(false)}}>Close</button>
        </div>
        }
        <Game key={custom} text={custom} getNewtext={customText} buttonText={"custom"}/> 
        </>
    )
}