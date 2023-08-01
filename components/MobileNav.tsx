'use client'
import './mobileNav.scss'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MobileNav = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass]  = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked]  = useState(false)
    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden") 
        }
        setIsMenuClicked(!isMenuClicked)
    }

  return (
    <>
   
    <div className="" id='mobileNavBar'>
        
        {/* <button id='mobileHamburger' title='hamburger'>
        <MenuIcon/>
        </button> */}

        <nav>
        
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>
            <Link id='logoNav' href='/'>
          <Image
            src='/smalllogokenny.png'
            width={250}
            height={150}
            alt='Kenny Mortgage Logo'
          />
        </Link>
        </nav>

        <div className={menu_class}>
        <Link id='links' href='/'>home</Link>
        <Link id='links' href='/'>home</Link>
        <Link id='links' href='/'>home</Link>
        <Link id='links' href='/'>home</Link>
        <Link id='links' href='/'>home</Link>
        </div>

    </div>
    </>
  )
}

export default MobileNav