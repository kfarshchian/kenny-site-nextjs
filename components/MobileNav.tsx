'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import "./mobileNav.scss";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const MobileNav = () => {

  const [navbar, setNavbar] = useState(false);
  return (
    <>
<div id="MobileNav">
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link title="Kenny Farshchian W/The Hometown Mortgage Co.." href="/">
                      <Image
                        src="/HTMortgageLogo.png"
                        width={150}
                        height={50}
                        alt="kenny mortgage logo"
                      />
                    </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <CloseIcon style={{color: "black"}}/>
                  ) : (
                    <MenuIcon style={{color: "black"}}/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {/* about us */}
                <li className="pb-2 text-xl text-black py-2 md:px-2 text-center border-b-2 md:border-b-0   border-black-900   md:hover:bg-transparent">
                    <Link  title="Kenny Farshchian W/The Hometown Mortgage Co.." onClick={() => setNavbar(!navbar)} id="main-link" href="/">
                      Home
                    </Link>
                  </li>
              <ul className="pb-2 text-xl text-black py-2 md:px-2 text-center border-b-2 md:border-b-0   border-black-900   md:hover:bg-transparent">
                    <li className="dropdown">
                      <p>
                        About Us <ArrowDropDownIcon />
                      </p>
                      <ul className="dropdown-content">
                        <li>
                          <Link onClick={() => setNavbar(!navbar)} title="Aboutus" href="/aboutus">About Us</Link>
                        </li>
                        <li>
                          <Link onClick={() => setNavbar(!navbar)} title="Our Process" href="/our-process">Our Process</Link>
                        </li>
                        <li>
                        </li>
                        <li>
                          <Link onClick={() => setNavbar(!navbar)} title="Blog" href="/Blog">Blog</Link>
                        </li>
                        <li>
                          <Link onClick={() => setNavbar(!navbar)} title="Contact" href="/contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link onClick={() => setNavbar(!navbar)} title="Loans" href="/Loans">Loans</Link>
                        </li>
                        <li>
                          <Link onClick={() => setNavbar(!navbar)} title="Reviews" href="/Reviews">Reviews</Link>
                        </li>
                        <li>
                          <Link onClick={() => setNavbar(!navbar)} title="Mortgage-Calculator-Utah" href="/Mortgage-Calculator-Utah">Mortgage Calculator Utah</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* Utah */}
                  <ul className="pb-2 text-xl text-black py-2 md:px-2 text-center border-b-2 md:border-b-0   border-black-900   md:hover:bg-transparent">
                    <li className="dropdown">
                      <p>
                        Utah
                        <ArrowDropDownIcon />
                      </p>
                      <ul className="dropdown-content">
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Utah Mortgage Salt Lake City" href="/Utah-mortgage-salt-lake-city">
                            Salt Lake City
                          </a>
                        </li>
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Utah Mortgage  Layton" href="/Utah-mortgage-Layton">Layton</a>
                        </li>
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Utah Mortgage  Bountiful" href="/Utah-mortgage-Bountiful">Bountiful</a>
                        </li>
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Utah  Mortgage  Syracuse" href="/Utah-Mortgage-Syracuse">Syracuse</a>
                        </li>
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Reverse Mortgage  Utah  Ogden" href="/Reverse-mortgage-Utah-Ogden">Ogden</a>
                        </li>
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Reverse Mortgage  Utah  West Valley City" href="/Reverse-mortgage-Utah-WestValleyCity">
                            West Valley City
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* florida */}
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0   border-black-900  md:hover:bg-transparent">
                    <li className="dropdown">
                      <p>
                        Florida
                        <ArrowDropDownIcon />
                      </p>
                      <ul className="dropdown-content">
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Reverse Mortgage  Florida  Venice" href="/Reverse-mortgage-Florida-Venice">Venice</a>
                        </li>
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Reverse Mortgage  Florida  Palm  Beach" href="/Reverse-mortgage-Florida-Palm-Beach">
                            Palm Beach
                          </a>
                        </li>
                        <li>
                          <a onClick={() => setNavbar(!navbar)} title="Reverse Mortgage  Florida  Naples" href="/Reverse-mortgage-Florida-Naples">Naples</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* Texas */}
                  <ul className="pb-2 text-xl text-black py-2 px-2 text-center  border-b-2 md:border-b-0   border-black-900 md:hover:bg-transparent">
                    <li className="dropdown">
                      <ul>
                        <li className="dropdown">
                          <p>
                            Texas
                            <ArrowDropDownIcon />
                          </p>
                          <ul className="dropdown-content">
                            <li>
                              <a title="Reverse Mortgage  Texas  Austin" href="/Reverse-mortgage-Texas-Austin">
                                Austin
                              </a>
                            </li>
                            <li>
                              <a title="Reverse Mortgage  Texas  Houston" href="/Reverse-mortgage-Texas-Houston">
                                Houston
                              </a>
                            </li>
                            <li>
                              <a title="Reverse Mortgage  Texas  Dallas" href="/Reverse-mortgage-Texas-Dallas">
                                Dallas
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default MobileNav