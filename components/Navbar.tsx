import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './navbar.scss'
import MobileNav from './MobileNav';


const Navbar = () => {
  return (
    <>
    <nav id='navbar' className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
        <div className="logo-container">
        <Link  href='/'>
          <Image
            src='/smalllogokenny.png'
            width={250}
            height={150}
            alt='Kenny Mortgage Logo'
          />
        </Link>
        </div>
        <Link id='main-link'  href='/'>
          Home
        </Link>
        <ul>
    <li className="dropdown">
      <a >About Us <ArrowDropDownIcon/></a>
      <ul className="dropdown-content">
      <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="#">Our Process</Link></li>
        <li><Link href="#">Closing Guarantee</Link></li>
        <li><Link href="#">Blog</Link></li>
        <li><Link href="#">Contact Us</Link></li>
        <li><Link href="#">Loans</Link></li>
      </ul>
        </li>
    </ul>

    <ul>
    <li className="dropdown">
      <a >Utah<ArrowDropDownIcon/></a>
      <ul className="dropdown-content">
        <li><a href="#">Salt Lake City</a></li>
        <li><a href="#">Layton</a></li>
        <li><a href="#">Bountiful</a></li>
        <li><a href="#">Syracuse</a></li>
        <li><a href="#">Ogden</a></li>
        <li><a href="#">West Valley City</a></li>
      </ul>
        </li>
    </ul>
    <ul>
    <li className="dropdown">
      <a >Florida<ArrowDropDownIcon/></a>
      <ul className="dropdown-content">
        <li><a href="#">Venice</a></li>
        <li><a href="#">Palm Beach</a></li>
        <li><a href="#">Naples</a></li>
      </ul>
        </li>
    </ul>
    <ul>
    <li className="dropdown">
      <a >Texas<ArrowDropDownIcon/></a>
      <ul className="dropdown-content">
        <li><a href="#">Austin</a></li>
        <li><a href="#">Houston</a></li>
        <li><a href="#">Dallas</a></li>
      </ul>
        </li>
    </ul>

        </div>
        <div className='flexStart gap-10'>
        <Link className="mortgage-company-utah-apply-today" href='https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com'>
        Loan Questionnaire
        </Link>
        <Link className="mortgage-company-utah-team-number" href='/'>
        801-520-8475
        </Link>
        <Link href='/'>
          <Image
            id="Utah-Mortgage-PRMI-LOGO"
            src='/shortlogo.png'
            width={250}
            height={150}
            alt='Kenny Mortgage Logo'
          />
          </Link>
        </div>


        
    </nav>
{/* mobile nav */}
<MobileNav/>
    </>
  )
}

export default Navbar