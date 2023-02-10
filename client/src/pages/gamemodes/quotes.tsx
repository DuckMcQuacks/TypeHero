import {useState} from "react"

export default function Quotes(){
    const words =["duck", "you"];
    const [keyPressed, setKeyPressed] = useState("");
    document.addEventListener("keydown",(e)=>{
        setKeyPressed(e.key)
        console.log(e.key)
    })
    return(
    <main className="gameMain">
        <div className="playBox">
            <div className="runStats">

            </div>
            <div className="typingArea">

            </div>
            <div className="miniMenu">
                <div>Retry</div>
                <div>New quote</div>
            </div>
        </div>
    </main>)
}