import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./navbar.scss";
import MobileNav from "./MobileNav";
import "./mobileNav.scss";

const Navbar = () => {
  return (
    <>
      <div id="MainNav">
        <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div id="logoContainer" className="flex items-center justify-between py-3 md:block">
                {/* LOGO */}
                <Link href="/" >
                  <Image
                    src="/smalllogokenny.png"
                    width={250}
                    height={250}
                    alt="Kenny Farshchian Logo PRMI"
                  />
                </Link>
                {/* prmi logo */}
                <Link href="https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com" >
                  <Image
                    id="prmiBlackLogo"
                    src="/prmiblack2.png"
                    width={240}
                    height={240}
                    alt="Kenny Farshchian Logo PRMI"
                  />
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  {/* <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"></button> */}
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                }
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900  md:hover:bg-transparent">
                    <Link className="home" id="main-link" href="/">
                      Home
                    </Link>
                  </li>
                  <ul className="pb-2 text-xl text-black py-2 md:px-2 text-center border-b-2 md:border-b-0   border-black-900   md:hover:bg-transparent">
                    <li className="dropdown">
                      <a>
                        About Us <ArrowDropDownIcon />
                      </a>
                      <ul className="dropdown-content">
                        <li>
                          <Link href="/aboutus">About Us</Link>
                        </li>
                        <li>
                          <Link href="/our-process">Our Process</Link>
                        </li>
                        <li>
                          <Link href="/closing-guarantee">
                            Closing Guarantee
                          </Link>
                        </li>
                        <li>
                          <Link href="/Blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link href="/Loans">Loans</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900  md:hover:bg-transparent">
                    <li className="dropdown">
                      <a>
                        Utah
                        <ArrowDropDownIcon />
                      </a>
                      <ul className="dropdown-content">
                        <li>
                          <a href="/Utah-mortgage-salt-lake-city">
                            Salt Lake City
                          </a>
                        </li>
                        <li>
                          <a href="/Utah-mortgage-Layton">Layton</a>
                        </li>
                        <li>
                          <a href="/Utah-mortgage-Bountiful">Bountiful</a>
                        </li>
                        <li>
                          <a href="/Utah-Mortgage-Syracuse">Syracuse</a>
                        </li>
                        <li>
                          <a href="/Reverse-mortgage-Utah-Ogden">Ogden</a>
                        </li>
                        <li>
                          <a href="/Reverse-mortgage-Utah-WestValleyCity">
                            West Valley City
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900  md:hover:bg-transparent">
                    <li className="dropdown">
                      <a>
                        Florida
                        <ArrowDropDownIcon />
                      </a>
                      <ul className="dropdown-content">
                        <li>
                          <a href="/Reverse-mortgage-Florida-Venice">Venice</a>
                        </li>
                        <li>
                          <a href="/Reverse-mortgage-Florida-Palm-Beach">
                            Palm Beach
                          </a>
                        </li>
                        <li>
                          <a href="/Reverse-mortgage-Florida-Naples">Naples</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900 md:hover:bg-transparent">
                    <li className="dropdown">
                      <ul>
                        <li className="dropdown">
                          <a>
                            Texas
                            <ArrowDropDownIcon />
                          </a>
                          <ul className="dropdown-content">
                            <li>
                              <a href="/Reverse-mortgage-Texas-Austin">
                                Austin
                              </a>
                            </li>
                            <li>
                              <a href="/Reverse-mortgage-Texas-Houston">
                                Houston
                              </a>
                            </li>
                            <li>
                              <a href="/Reverse-mortgage-Texas-Dallas">
                                Dallas
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <li className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900 md:hover:bg-transparent">
                    <Link
                      className="mortgage-company-utah-apply-today"
                      href="https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com"
                    >
                      Loan Questionnaire
                    </Link>
                  </li>
                  <li className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-black-900 md:hover:bg-transparent">
                    <Link
                      className="mortgage-company-utah-team-number"
                      href="/"
                    >
                      801-520-8475
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <nav id='navbar' className='flexBetween navbar'>
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


        
    </nav> */}
      {/* mobile nav */}
      <MobileNav />
    </>
  );
};

export default Navbar;
