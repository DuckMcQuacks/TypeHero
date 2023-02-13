import {useState, useEffect,useRef} from "react"

export default function Quotes(){
    const [chars, setChars] = useState("I am a dick")
    const [restart, setRestart] = useState(false);

    let start : number;
    let time : number;
    let isInProgress: boolean = true;
    let classes = [""];
    let inputtedChar = [''];
    let i: number = 0;

    const [formattedString, setFormattedString] = useState(chars.split('').map((char, x) =>{
        return(<span key={x} className={classes[x] || ""}>{char}</span>)
    }))
    const onKeyDown = (event:KeyboardEvent) => {
        if(restart===true){
            classes =[""];
            inputtedChar=[""];
            i = 0;
            setFormattedString(chars.split('').map((char, x) =>{
                return(<span key={x} className={classes[x] || ""}>{inputtedChar[x] || char}</span>)
            }))
            console.log("what");
        }

        const key = String(event.key)
        if(key !== "CapsLock" && key !== "Shift" && key!=="Backspace" && key!="Tab" && key!="Enter"){
            if(key == " "){
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
            return(<span key={x} className={classes[x] || ""}>{inputtedChar[x] || char}</span>)
        }))
        if(i == 1)
        {
            start = new Date().getTime();
        }
        if(i == chars.length && isInProgress)
        {
            isInProgress = false;
            time = new Date().getTime()-start;
            console.log(time)
        }
    }
    useEffect(()=>{
        window.addEventListener("keydown", onKeyDown)

        return()=>{window.removeEventListener("keydown", onKeyDown)}
    },[restart])
    return(
    <main className="gameMain">
        <div className="playBox">
            <div className="runStats">

            </div>
            <div className="typingArea">
            {formattedString}
            </div>
            <div className="miniMenu">
                <div onClick={()=>{setRestart(prev=>{
                    return !prev
                })}}>Retry</div>
                <div>New quote</div>
            </div>
        </div>
    </main>)
}