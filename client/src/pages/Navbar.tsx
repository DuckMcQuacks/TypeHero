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
            <div className="nav-menu" style={{display: (isMenuOpen ? "flex" : "none"), flexFlow: (innerWidth>900 ? "row" : "column")}}>
            <Link href = "/" className='linkButtons' >Home</Link>
            <Link href = "/profile" className='linkButtons' >Profile</Link>
            <Link href = "/friends" className='linkButtons' >Friends</Link>
            <Link href = "/login" className='linkButtons' >Login</Link>
            </div>
        </nav>
    )
}