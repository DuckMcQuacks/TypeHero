import {useState, useEffect,useRef} from "react"

export default function Quotes(){
    const words =["duck", "you"];
    const [chars, setChars] = useState("I am a dick")
    let classes = [""]
    let inputtedChar = [''];
    let i = 0;
    const [formattedString, setFormattedString] = useState(chars.split('').map((char, x) =>{
        return(<span className={classes[x] || ""}>{char}</span>)
    }))
    const onKeyDown = (event:KeyboardEvent) => {
        const key = String(event.key)
        if(key !== "CapsLock" && key !== "Shift" && key!=="Backspace" && key!="Tab" && key!="Enter"){
            if(key == " ")
            {
                inputtedChar[i] = "";
            }
            else{
                inputtedChar[i] = key;
            }
            if(key == chars[i]){
                classes[i] = "correct"
                i++;
            }
            else{
                classes[i] = "incorrect"
                i++;
            }
        }
        else{
            if(key == "Backspace"){
                i--;
                classes[i] = ""
                inputtedChar[i] = "";

            }
        }
        if(i<0)
        {
            i = 0;
        }
        if(i>chars.length){
            i=chars.length
        }
        setFormattedString(chars.split('').map((char, x) =>{
            return(<span className={classes[x] || ""}>{inputtedChar[x] || char}</span>)
        }))
        console.log(classes)
    }
    useEffect(()=>{
        window.addEventListener("keydown", onKeyDown)

        return()=>{window.removeEventListener("keydown", onKeyDown)}
    },[])
    return(
    <main className="gameMain">
        <div className="playBox">
            <div className="runStats">

            </div>
            <div className="typingArea">
            {formattedString}
            </div>
            <div className="miniMenu">
                <div>Retry</div>
                <div>New quote</div>
            </div>
        </div>
    </main>)
}