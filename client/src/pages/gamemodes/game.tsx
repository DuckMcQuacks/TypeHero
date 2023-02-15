import {useState, useEffect}     from "react"
interface props{
    text : string,
    getNewtext: VoidFunction,
    buttonText: string
}
export default function Game({text,getNewtext,buttonText}:props){
    const [chars, setChars] = useState(text)
    const [restart, setRestart] = useState(false);
    const [gameInfo, setGameInfo] = useState({
        wordPerMinute: "0.00",
        characterPerMinute: "0.00",
        missedOnes: "0",
        correctOnes: "0",
        totalTimeTaken: "0.00"
    });

    let startTime : number;
    let time : number;
    let isInProgress: boolean = true;
    let classes = ["nextToTypeBlinking"];
    let i: number = 0;

    const [formattedString, setFormattedString] = useState(chars.split('').map((char, x) =>{
        return(<span key={x} className={classes[x] || ""}>{char}</span>)
    }))

    function setKeyCode(className:string,isAdding:boolean){
        if(isAdding){
            classes[i] = className
            classes[i+1]="nextToType"
            i++;
        }
        else{
            i--;
            classes[i] = "nextToType"
            classes[i+1] =className
        }
    }
    function updateVisuals(){
        setFormattedString(chars.split('').map((char, x) =>{
            return(<span key={x} className={classes[x] || ""}>{char}</span>)
        }))
    }
    const onKeyDown = (event:KeyboardEvent) => {
        if(restart){
            setRestart(false);

            classes =[""];
            i = 0;
            updateVisuals();
        }
        const key = String(event.key)

        if(key !== "CapsLock" && key !== "Shift" && key !== "Backspace" && key != "Tab" && key != "Enter"){
            setKeyCode(key == chars[i] ? "correct" :" incorrect", true)
        }
        if(key == "Backspace"){setKeyCode("",false)}
        //forcing lower boundary
        if(i < 0){
            i = 0;
        }
        //forcing upper boundary
        if(i > chars.length){
            i = chars.length
        }
        updateVisuals();
        if(i == 1){
            startTime = new Date().getTime();
        }
        if(i == chars.length && isInProgress){
            isInProgress = false;
            time = new Date().getTime() - startTime;
            const correct = classes.filter(x=> x == "correct").length

            setGameInfo({
                wordPerMinute: Number(correct / 5 * (60000 / time)).toFixed(2),
                characterPerMinute: Number(correct*(60000 / time)).toFixed(2),
                correctOnes: String(correct),
                missedOnes: String(chars.length - correct),
                totalTimeTaken: (time / 1000).toFixed(2)+'s',
            })
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
            <p title={"Word per minute"}>WPM: {gameInfo.wordPerMinute}</p>
            <p title={"Character per minute"}>CPM: {gameInfo.characterPerMinute}</p>
            <p title={"The amount of characters you succesfully typed correctly"}>Correct: {gameInfo.correctOnes}</p>
            <p title={"The amount of characters you typed incorrectly"}>Incorrect: {gameInfo.missedOnes}</p>
            <p title={"The amount of time taken to finish, in seconds."}>Time: {gameInfo.totalTimeTaken}</p>
            </div>
            <div className="typingArea">
            {formattedString}
            </div>

            <div className="miniMenu">
                <div onClick={()=>
                {setRestart(prev=>{
                    return true})
                    updateVisuals()
                }}>Retry</div>
                <div onClick={getNewtext}>New {buttonText}</div>
            </div>
        </div>
    </main>)
}