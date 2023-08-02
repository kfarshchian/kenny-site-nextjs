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
      <li><Link href="/aboutus">About Us</Link></li>
        <li><Link href="/our-process">Our Process</Link></li>
        <li><Link href="/closing-guarantee">Closing Guarantee</Link></li>
        <li><Link href="/Blog">Blog</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/Loans">Loans</Link></li>
      </ul>
        </li>
    </ul>

    <ul>
    <li className="dropdown">
      <a >Utah<ArrowDropDownIcon/></a>
      <ul className="dropdown-content">
        <li><a href="/Utah-mortgage-salt-lake-city">Salt Lake City</a></li>
        <li><a href="/Utah-mortgage-Layton">Layton</a></li>
        <li><a href="/Utah-mortgage-Bountiful">Bountiful</a></li>
        <li><a href="/Utah-Mortgage-Syracuse">Syracuse</a></li>
        <li><a href="/Reverse-mortgage-Utah-Ogden">Ogden</a></li>
        <li><a href="/Reverse-mortgage-Utah-WestValleyCity">West Valley City</a></li>
      </ul>
        </li>
    </ul>
    <ul>
    <li className="dropdown">
      <a >Florida<ArrowDropDownIcon/></a>
      <ul className="dropdown-content">
        <li><a href="/Reverse-mortgage-Florida-Venice">Venice</a></li>
        <li><a href="/Reverse-mortgage-Florida-Palm-Beach">Palm Beach</a></li>
        <li><a href="/Reverse-mortgage-Florida-Naples">Naples</a></li>
      </ul>
        </li>
    </ul>
    <ul>
    <li className="dropdown">
      <a >Texas<ArrowDropDownIcon/></a>
      <ul className="dropdown-content">
        <li><a href="/Reverse-mortgage-Texas-Austin">Austin</a></li>
        <li><a href="/Reverse-mortgage-Texas-Houston">Houston</a></li>
        <li><a href="/Reverse-mortgage-Texas-Dallas">Dallas</a></li>
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