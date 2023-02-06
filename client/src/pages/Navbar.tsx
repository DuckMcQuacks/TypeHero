import Link from 'next/link';
import {useEffect, useState} from 'react';
import Image from 'next/image'

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [innerWidth, setInnerWidth] = useState<Number>(0);
    function mobileMenuHandler(){
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        function sizeHandler(){
            setInnerWidth(window.innerWidth)
            if(window.innerWidth>900)
            {
                setIsMenuOpen(true);
            }
        }
        sizeHandler();
        window.addEventListener("resize",sizeHandler)
        return(()=>{window.removeEventListener("resize",sizeHandler)})
    },[])
    return(
        <nav>
            <div className="fflRow">
            <h1>W.I.P ICON</h1>
            <Image src={ isMenuOpen ? "/next.svg" : "/menuIcon.svg"} width={50} height={50} alt ={"menu/close icon"} className={"hamburgIcon"} onClick={mobileMenuHandler}/>
            </div>
            <div className="nav-menu" style={{display: isMenuOpen ? "" : "none"}}>
            <div className='linkButtons'>Home</div>
            <div className='linkButtons'>Gamemodes</div>
            <div className='linkButtons'>Profile</div>
            <div className='linkButtons'>Friends</div>
            <div className='linkButtons'>Logout/(Login/Register)</div>
            </div>
        </nav>
    )
}