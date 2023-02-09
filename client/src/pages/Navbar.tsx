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
    const iconSize = 70;
    return(
        <nav>
            <div className="fflRow">
            <Image style={{backgroundColor: "transparent", marginLeft: "20px"}} src={"TypeHero.png"} width={innerWidth>900? 220 : 110} height={innerWidth>900? 100 : 50} title={"Home"} alt={"Home icon"} />
            <Image src={ isMenuOpen ? "close-svgrepo-com.svg" : "menuIcon.svg"} style={{marginLeft:"auto", marginTop:"auto", marginBottom: "auto"}} width={40} height={40} alt ={"menu/close icon"} className={"hamburgIcon"} onClick={mobileMenuHandler}/>
            </div>
            <div className="nav-menu" style={{display: (isMenuOpen ? "flex" : "none"), flexFlow: (innerWidth>900 ? "row" : "column")}}>
            <Link href = "/" className={innerWidth > 900 ? "navIcons" : "linkButtons"}>
                {innerWidth>900? <Image src={"home-svgrepo-com.svg"} width={iconSize} height={iconSize} title={"Home"} alt={"Home icon"} /> : "Home"}
            </Link>
            <Link href = "/profile" className={innerWidth>900 ? "navIcons":'linkButtons'} >
                {innerWidth>900 ? <Image src={"profile-svgrepo-com.svg"} width={iconSize} height={iconSize} title={"Profile"} alt={"Profile icon"} /> : "Profile"}
            </Link>
            <Link href = "/friends" className={innerWidth>900 ? "navIcons":'linkButtons'} >
                {innerWidth>900 ? <Image src={"add-friend-svgrepo-com.svg"} width={iconSize} height={iconSize} title={"Friends"} alt={"Friends icon"} /> : "Friends"}
            </Link>
            <Link href = "/login" className={innerWidth>900 ? "navIcons":'linkButtons'} >
                {innerWidth>900 ? <Image src={"login-svgrepo-com.svg"} width={iconSize} height={iconSize} title={"Login"} alt={"Login icon"} /> : "Login"}
            </Link>
            </div>
        </nav>
    )
}